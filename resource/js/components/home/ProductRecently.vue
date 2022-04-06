<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Recently Added Products</h3>

            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        </div>
        <div class="card-body p-0" v-if="loaded">
            <ul class="products-list product-list-in-card pl-2 pr-2" v-for="(product, index) in data" :key="index">
                <li class="item d-flex justify-content-between">
                    <div class="product-info m-0">
                        <a href="javascript:void(0)" class="product-title">{{ product.name }}</a>
                        <span class="product-description">
                            {{ product.description }}
                        </span>
                    </div>
                    <div class="product-price">
                        <span class="badge badge-warning float-right">{{ product.price | formatTotal }}</span>
                    </div>
                </li>
            
            </ul>
        </div>
        <div class="card-footer text-center d-none">
            <a href="javascript:void(0)" class="uppercase">View All Products</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'products-recently',
    props:{
        csrf_token: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            data: [],
            loaded: false,
        }
    },
    filters: {
        formatTotal(val){
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });
        return formatter.format(val);
      }
    },
    methods: {
        getProducts() {
            this.loaded = false;
            axios({
                method: 'post',
                url: '/api/products/lastest',
                data: {
                    csrf_token: this.csrf_token,
                }
            }).then(response => {
                const { data: { response:products } } = response;
                this.data = products;
                this.loaded = true;
            })
        },
    },
    mounted() {
        this.getProducts();
    },
}
</script>

<style>
    .products-list>.item::after {
        content: none !important;
    }
    .product-img{
        width: 100px !important;
    }
</style>