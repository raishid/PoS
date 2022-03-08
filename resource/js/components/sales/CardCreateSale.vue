<template>
    <div class="card border-0 border-top border-4 border-success">
        <div class="card-title"></div>
        <form v-on:submit.prevent="sell" role="form" method="post" autocomplete="off">
            <div class="card-body">
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-text"><i class="fa fa-user"></i></span>
                        <input type="text" name="seller" class="form-control" :value="authParser.name" readonly/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-text"><i class="fa fa-key"></i></span>
                        <input type="text" name="sale" class="form-control" :value="formatInvoce(id_sale)" readonly/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <v-select :options="select2.options" v-model="sale.customer" placeholder="Select Customer">
                            <template #search="{attributes, events}">
                                <input
                                class="vs__search"
                                :required="!sale.customer"
                                v-bind="attributes"
                                v-on="events"
                                />
                            </template>
                        </v-select>
                        <button 
                            type="button" 
                            id="modal-customer-button" 
                            class="btn btn-success btn-sm" 
                            data-bs-toggle="modal" 
                            data-bs-target="#create-modal-customer"
                        >Add client
                        </button>
                    </div>
                </div>
                <div class="form-group row" v-for="(product, index) in sale.products" :key="index">
                    <div class="col-6">
                        <div class="input-group ">
                            <button class="btn btn-danger btn-sm" type="button" @click="removeProductSale(product.id)"><i class="fa fa-times"></i></button>
                            <input type="text" name="product" class="form-control" placeholder="Product" required :value="product.name" readonly>
                        </div>
                    </div>
                    <div class="col-3">
                        <imask-input 
                            required
                            name="quantity_product"
                            class="form-control" 
                            :mask="Number"
                            :min="1"
                            :type="'number'"
                            :max="product.stock"
                            :value="quantityFormat(product)"
                            @change="modifyQuantity(product.id, $event)"
                        />
                    </div>
                    <div class="col-3 px-0 px-md-3">
                        <div class="input-group">
                            <span class="input-group-text"><i class="fa fa-usd"></i></span>
                            <input type="text" name="price" class="form-control" placeholder="10$" readonly required :value="numberFormat(product.price)">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="d-grid">
                            <button 
                                type="button" 
                                id="modal-customer-button" 
                                class="d-block btn btn-outline-success d-lg-none" 
                                data-bs-toggle="modal" 
                                data-bs-target="#modal-add-product"
                            >Add Product
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="border-top mt-3 row justify-content-end">
                    <div class="col-sm-8">
                        <table class="table table-light">
                            <thead>
                                <tr>
                                    <th>Tax</th>
                                    <th>Subtotal</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="input-group">
                                            <input type="number" class="form-control" name="tax" min="0" autocomplete="off" placeholder="0" required v-model="sale.tax" @change="totalize">
                                            <span class="input-group-text"><i class="fa fa-percent"></i></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="net" min="0" autocomplete="off" placeholder="0" required v-model="sale.net" readonly>
                                            <span class="input-group-text"><i class="fa fa-usd"></i></span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fa fa-usd"></i></span>
                                            <input type="text" class="form-control" name="total_sale" min="1" autocomplete="off" placeholder="0.00" readonly required v-model="sale.total">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="row form-group border-top mt-3 py-4">
                    <div class="col-6">
                        <div class="input-group">
                            <select class="form-select" name="method" required v-model="sale.method">
                                <option value="">Select the payment method</option>
                                <option value="cash">Cash</option>
                                <option value="debit">Debit</option>
                                <option value="credit">Credit Card</option>
                                <option value="wire_transfer">Wire transfer</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-6" v-if="verifyMethod">
                        <div class="input-group">
                            <input type="text" name="id_transaction" class="form-control" placeholder="ID transaction" required v-model="sale.id_transaction">
                            <span class="input-group-text"><i class="fa fa-lock"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary px-3">{{SellOrEdit}}</button>
                </div>
            </div>
        </form>

        <customer-modal :csrf_token="csrf_token" @mutateCustomer="mutateDataCustomer"></customer-modal>

        <div
            class="modal fade"
            id="modal-add-product"
            tabindex="-1"
            aria-labelledby="ModalAddProduct"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <table-add-product :products="'[]'" id_table="table-add-responsive" :responsive="true" ref="add_product_responsive"></table-add-product>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                </div>

                </div>
                
            </div>
        </div>
    </div>

</template>
<script>
import { EventBus } from '../EventBus';
import ModalCustomer from '../customers/ModalCustomers.vue';
import { IMaskComponent } from 'vue-imask';
import ModalAddProduct from './CardAddProduct.vue';
import numeral from 'numeral';
export default {
    name: 'card-create-sale',
    props:{
        auth:{
            required: true
        },
        customers:{
            required: true
        },
        id_sale:{
            required: true
        },
        csrf_token:{
            required: true
        },
        edit: {
            default: false
        },
        _sale:{
            default: undefined
        }
        
    },
    components:{
        ModalCustomer,
        'imask-input': IMaskComponent,
        ModalAddProduct
    },
    data(){
        return {
            authParser: JSON.parse(this.auth),
            customersParser: JSON.parse(this.customers),
            sale:{
                customer: '',
                method: '',
                products: [],
                tax: 0,
                total: 0,
                net: 0,
                id_transaction: '',
            },
            select2:{
                options: []
            },
        }
    },
    computed:{
        verifyMethod(){
            return this.sale.method !== 'cash' && this.sale.method !== '';
        },
        SellOrEdit(){
            return this.edit ?  'Edit Sale' : 'Sell';
        }
        
    },
    methods:{
        mutateDataCustomer(data){
            this.customersParser.push(data);
            this.select2.options.push({label: data.name, code: data.id})
            this.sale.customer = {label: data.name, code: data.id};
        },
        addProductSale(product){
            product.quantity = 1;
            this.sale.products.push(product);
            this.totalize();
        },
        removeProductSale(id){
            this.sale.products = this.sale.products.filter(product => { return product.id != id }); 
            this.totalize();
            EventBus.$emit('remove', id);
        },
        totalize(){
            let total = 0;
            this.sale.products.map(product => {
                total = total + (product.price * product.quantity)
            })
            if(this.sale.tax > 0){
                this.sale.net = numeral(total).format('0,0.00');
                this.sale.total = numeral(((total * this.sale.tax) / 100) + total).format('0,0.00');
            }else{
                this.sale.net = numeral(total).format('0,0.00');
                this.sale.total = numeral(total).format('0,0.00');
            }
        },
        modifyQuantity(id, event){
            if(event.target.value > 0){
                const product = this.sale.products.find(p => p.id == id);
                product.quantity = parseInt(event.target.value);
                this.totalize();    
            }
        },
        numberFormat(price){
            return numeral(price).format('0,0.00')
        },
        sell(){
            if(this.sale.products.length > 0){
                this.$swal.fire({
                title: 'Are you sure to make this sale?',
                text: "Are all the data correct?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, sell...'
                }).then((result) => {
                if (result.isConfirmed) {
                    if(this.edit){
                        axios({
                            method:'post',
                            url: `/sales/edit/${this._sale.id}`,
                            data: {
                                csrf_token: this.csrf_token,
                                id_sale: this.id_sale,
                                user_id: this.authParser.id,
                                customer_id: this.sale.customer.code,
                                tax: this.sale.tax,
                                net: this.sale.net,
                                total: this.sale.total,
                                method: this.sale.method,
                                id_transaction: this.sale.id_transaction,
                                products: JSON.stringify(this.sale.products)
                            }
                        }).then(response => {
                            const { data: { status, response:resp } } = response;
                            if(status){
                                this.$swal.fire(
                                'Success!',
                                'Your sale has been registered.',
                                'success'
                                ).then(() => {
                                    location.href = '/sales';
                                })
                            }else{
                                this.$swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'there was a problem saving this sale',
                                })
                            }
                        })
                    }else{
                        axios({
                            method:'post',
                            url: '/sales/sell',
                            data: {
                                csrf_token: this.csrf_token,
                                id_sale: this.id_sale,
                                user_id: this.authParser.id,
                                customer_id: this.sale.customer.code,
                                tax: this.sale.tax,
                                net: this.sale.net,
                                total: this.sale.total,
                                method: this.sale.method,
                                id_transaction: this.sale.id_transaction,
                                products: JSON.stringify(this.sale.products)
                            }
                        }).then(response => {
                            const { data: { status, response:resp } } = response;
                            if(status){
                                this.$swal.fire(
                                'Success!',
                                'Your sale has been registered.',
                                'success'
                                ).then(() => {
                                    location.href = '/sales';
                                })
                            }else{
                                this.$swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'there was a problem saving this sale',
                                })
                            }
                        })
                    }
                }
                })
            }else{
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You cannot sell if you have no products added.!',
                    })
            }
        },
        formatInvoce(invoice){
          let new_invoice = invoice.toString().substr(0, 2) + '-';
          return new_invoice = new_invoice + invoice.toString().substr(2, 4);
        },
        quantityFormat(product){
            return product?.pivot ? product.pivot.quantity.toString() : '1';
        }

    },
    mounted(){
         this.customersParser.map((customer) => {
            this.select2.options.push({label: customer.name, code: customer.id})
        });
        EventBus.$on('add', product => this.addProductSale(product));
        EventBus.$on('products', data => {
            this.$refs.add_product_responsive.addProductResponsive(data);
         })

        if(this.edit){
            this.sale.customer = { label: this._sale.customer.name, code: this._sale.customer.id };
            this.sale.method = this._sale.method;
            this.sale.products = this._sale.products;
            this.sale.tax = this._sale.tax;
            this.sale.total = this._sale.total;
            this.sale.net = this._sale.net;
            this.sale.id_transaction = this._sale.id_transaction;
            this.authParser = this._sale.seller;
        }
    }
    
}
</script>
<style>
    .v-select{
        position: relative;
        flex: 1 1 auto;
    }
    @media (max-width: 768px) {
        #modal-customer-button{
            width: 100%;
        }
        .select2{
            width: 100% !important;
        }
    }
</style>