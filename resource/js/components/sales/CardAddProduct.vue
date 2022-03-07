<template>
    <div class="card border-0 border-top border-4 border-warning">
        <div class="card-title"></div>
        <div class="card-body">
            <table class="table table-striped table-bordered" :id="id_table">
                <thead>
                    <tr>
                        <th class="text-center all">#</th>
                        <th class="text-center all">SKU</th>
                        <th class="text-center all">Name</th>
                        <th class="text-center desktop">Description</th>
                        <th class="text-center desktop">Stock</th>
                        <th class="text-center desktop">Price</th>
                        <th class="text-center all">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in productsParse" :key="index">
                        <td class="text-center align-middle">{{ index + 1 }}</td>
                        <td class="text-center align-middle">{{ product.sku }}</td>
                        <td class="text-center align-middle">{{ product.name }}</td>
                        <td class="text-center align-middle">{{ product.description }}</td>
                        <td class="text-center align-middle" ><button type="button" class="btn btn-sm" :class="[(product.stock >= 10 && 'bg-success'), (product.stock < 10 && 'btn-warning'), (product.stock == 0 && 'btn-danger') ]">{{ product.stock }}</button></td>
                        <td class="text-center align-middle">{{ product.price }}</td>
                        <td class="text-center align-middle">
                            <div class="btn-group">
                                <button type="button" class="btn btn-success" @click="handleAdd($event, product.id)" :ref="'b-prod-'+product.id" v-bind:disabled="product.stock == 0 && 'disabled'">Add</button>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>
<script>
import { EventBus } from '../EventBus';
export default {
    name: 'table-add-product',
    props:{
        products:{
            required: true
        },
        id_table: {
            type: String,
            default: 'table-products'

        },
        modal: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            productsParse: JSON.parse(this.products),
            datatable: undefined,
        }
    },
    methods:{
        handleAdd(event, id){
            event.target.disabled = true;
            const product = this.productsParse.find(p => p.id == id);
            EventBus.$emit('add', product);
        },
        handleRemove(id){
            const button = this.$refs['b-prod-'+id][0];
            button.disabled = false;
        },
        addProductResponsive(data){
            this.productsParse = data;
            new Promise(res => {
                this.datatable.destroy();
                res(true)
            }).then(() => {
                this.mountedDatatable();
            })
        },
        mountedDatatable(){
          return this.datatable = $(`#${this.id_table}`).DataTable({
                    responsive: true,
                    destroy: true,
                    lengthChange: false, 
                    autoWidth: false,
                    rowReorder: {
                        selector: 'td:nth-child(2)'
                    }
                });
        }
    },
    mounted(){
        this.mountedDatatable();
        EventBus.$on('remove', data => this.handleRemove(data));
        if(!this.modal){
            EventBus.$emit('products', this.productsParse);
        } 
    }
}
</script>