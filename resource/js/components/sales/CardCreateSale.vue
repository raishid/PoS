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
                        <span class="input-group-text"><i class="fa fa-user"></i></span>
                        <select name="customer" class="form-select" required v-model="sale.customer_id">
                            <option value="" selected>Select Customer</option>
                            <option v-for="(customer, index) in customersParser" :key="index" :value="customer.id" >{{ customer.name }}</option>
                        </select>
                        <span class="input-group-text">
                            <button 
                                type="button" 
                                id="modal-customer-button" 
                                class="btn btn-success btn-sm" 
                                data-bs-toggle="modal" 
                                data-bs-target="#create-modal-customer"
                            >Add client
                            </button>
                        </span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-6">
                        <div class="input-group ">
                            <button class="btn btn-danger btn-sm"><i class="fa fa-times"></i></button>
                            <input type="text" name="product" class="form-control" placeholder="Add Product" required>
                        </div>
                    </div>
                    <div class="col-3">
                        <input type="number" name="quantity_product" class="form-control" min="1" placeholder="1" required>
                    </div>
                    <div class="col-3">
                        <div class="input-group">
                            <span class="input-group-text"><i class="fa fa-usd"></i></span>
                            <input type="number" name="price" class="form-control" placeholder="10$" readonly required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="d-grid">
                            <button type="button" class="d-block btn btn-outline-success d-lg-none">Add Product</button>
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
                                            <input type="number" class="form-control" name="tax" min="0" autocomplete="off" placeholder="0" required>
                                            <span class="input-group-text"><i class="fa fa-percent"></i></span>
                                        </div>
                                    </td>
                                    <td class="w-50">
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fa fa-usd"></i></span>
                                            <input type="number" class="form-control" name="total_sale" min="1" autocomplete="off" placeholder="0.00" readonly required>
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
                    <button type="submit" class="btn btn-primary px-3">Save sale</button>
                </div>
            </div>
        </form>

        <customer-modal :csrf_token="csrf_token" @mutateCustomer="mutateDataCustomer"></customer-modal>
    </div>

</template>
<script>
import { EventBus } from '../EventBus';
import ModalCustomer from '../customers/ModalCustomers.vue';
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
        ModalCustomer
    },
    data(){
        return {
            authParser: JSON.parse(this.auth),
            customersParser: JSON.parse(this.customers),
            sale:{
                customer_id: '',
                method: '',

            }
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
        }
    }
    
}
</script>