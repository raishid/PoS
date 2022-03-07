<template>
    <div class="card border-0 border-top border-4 border-success">
        <div class="card-title"></div>
        <form role="form" method="post" autocomplete="off">
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
                        <input type="text" name="sale" class="form-control" :value="id_sale" readonly/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <select name="customer" required v-model="sale.customer_id" id="select-customer" class="form-control">
                            <option v-for="(customer, index) in customersParser" :key="index" :value="customer.id" >{{ customer.name }}</option>
                        </select>
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
                            value="1"
                            @change="modifyQuantity(product.id, $event)"
                        />
                    </div>
                    <div class="col-3 px-0 px-md-3">
                        <div class="input-group">
                            <span class="input-group-text"><i class="fa fa-usd"></i></span>
                            <input type="number" name="price" class="form-control" placeholder="10$" readonly required :value="product.price">
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
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="w-50">
                                        <div class="input-group">
                                            <input type="number" class="form-control" name="tax" min="0" autocomplete="off" placeholder="0" required v-model="sale.tax" @change="totalize">
                                            <span class="input-group-text"><i class="fa fa-percent"></i></span>
                                        </div>
                                    </td>
                                    <td class="w-50">
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fa fa-usd"></i></span>
                                            <input type="number" class="form-control" name="total_sale" min="1" autocomplete="off" placeholder="0.00" readonly required v-model="sale.total">
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
                            <input type="text" name="id_transaction" class="form-control" placeholder="ID transaction" required>
                            <span class="input-group-text"><i class="fa fa-lock"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary px-3">Sell</button>
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
                customer_id: '',
                method: '',
                products: [],
                tax: 0,
                total: 0,
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
        
    },
    methods:{
        mutateDataCustomer(data){
            this.customersParser.push(data);
            this.sale.customer_id = data.id;
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
                this.sale.total = ((total * this.sale.tax) / 100) + total;
            }else{
                this.sale.total = total;
            }
        },
        modifyQuantity(id, event){
            if(event.target.value > 0){
                const product = this.sale.products.find(p => p.id == id);
                product.quantity = parseInt(event.target.value);
                this.totalize();    
            }
        }

    },
    mounted(){
         this.customersParser.map((customer) => {
            this.select2.options.push({id: customer.id, value: customer.name})
        });
        $('#select-customer').select2({
            width: 'element',
            placeholder: "Select Customer",
        });

        EventBus.$on('add', product => this.addProductSale(product));
        EventBus.$on('products', data => {
            this.$refs.add_product_responsive.addProductResponsive(data);
         })
    }
    
}
</script>
<style>
    .select2-selection{
        min-height: 2rem;
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