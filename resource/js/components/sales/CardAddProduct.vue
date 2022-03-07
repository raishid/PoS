<template>
    <div class="card border-0 border-top border-4 border-warning">
        <div class="card-title"></div>
        <div class="card-body">
            <table class="table table-striped table-bordered" id="table-products">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in productsParse" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ product.sku }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.stock }}</td>
                        <td>{{ product.price }}</td>
                        <td>
                            <div class="btn-group">
                                <button type="button" class="btn btn-success">Add</button>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'table-add-product',
    props:{
        products:{
            required: true
        }
    },
    data(){
        return {
            productsParse: JSON.parse(this.products),
            datatable: undefined,
        }
    },
    methods:{

    },
    mounted(){
        this.datatable = $('#table-products').DataTable({
            responsive: true,
            destroy: true,
            lengthChange: false, 
            autoWidth: false,
            rowReorder: {
                selector: 'td:nth-child(2)'
            }
        });
    }
}
</script>