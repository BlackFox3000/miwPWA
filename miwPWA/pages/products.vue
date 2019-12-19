<template>
  <div>
    <div class="logo">
      <img src="/icon.png" alt="logo" id="logo">
      <div id="title">Kayu</div>
    </div>
    <h1> Nos Produits </h1>
    <div id="containListe">
      <ul id="v-for-object" class="liste">
        <li v-for="produit in produits" class="item">
          <div class="top">
            <img :src="produit.pictures[0]">
            <ul>
              <li>{{produit.name}}</li>
              <li>marque : {{produit.brand}}</li>
              <li>quantité : {{produit.quantity}}</li>
              <li>note: {{produit.grade}}</li>
              <li>Ingrédients:
                <button @click="show(produit._id)" :id="produit._id+'button'">voir plus</button>
              </li>
              <li :id="produit._id" style="display: none">
                <ul>
                  <li v-for="ingredient in produit.ingredients">
                    - {{ingredient.name}} {{ingredient.proportion}}%
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

    <div class="produits">

    </div>

  </div>
</template>


<script>
    export default {
        data: () => {
            return {
                produits: [{
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                }, {
                    "_id": "0",
                    "name": "Lipton Ice Tea",
                    "brand": "Lipton",
                    "bar_code": "045735757767",
                    "grade": "5",
                    "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                    "quantity": "200 ml",
                    "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                },
                    {
                        "_id": "1",
                        "name": "Lipton Ice Tea",
                        "brand": "Lipton",
                        "bar_code": "045735757767",
                        "grade": "5",
                        "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                        "quantity": "200 ml",
                        "ingredients": [{"name": "sugar", "propotion": "20"}, {
                            "name": "sugar",
                            "propotion": "20"
                        }, {"name": "sugar", "propotion": "20"}, {"name": "sugar", "propotion": "20"}, {
                            "name": "sugar",
                            "propotion": "20"
                        }, {"name": "oil", "proportion": "80"}]
                    },
                    {
                        "_id": "2",
                        "name": "Lipton Ice Tea",
                        "brand": "Lipton",
                        "bar_code": "045735757767",
                        "grade": "5",
                        "pictures": ["/produit/lipton-ice-tea-50-cl.jpg", "/produit/img2.jpg", "/produit/img3.jpg", ""],
                        "quantity": "200 ml",
                        "ingredients": [{"name": "sugar", "propotion": "20"}, {"name": "oil", "proportion": "80"}]
                    },
                ]
            }
        },
        methods: {
            show(id) {

                let display = document.getElementById(id).style.display;
                if (display == ("" || "unset")) {
                    document.getElementById(id).style.display = "none";
                    document.getElementById(id).style.display
                    document.getElementById(id + 'button').innerHTML = "voir plus"
                } else {
                    document.getElementById(id).style.display = "unset";
                    document.getElementById(id + 'button').innerHTML = "voir moins"
                    console.log("chui là")
                }
                console.log(display)
            }
        }
    }
    // import {mapActions, mapState } from 'vuex';

    // export default {
    //     mounted(){
    //         fetchProducts()
    //     },
    //     computed: mapState({
    //        products:state.api
    //     }),
    //     methods: {
    //         ...mapActions(['fetchProducts'])
    //     }
    // }

</script>

<style scoped>
  @font-face {
    font-family: "yuka";
    src: url("./../assets/yuka.woff2") format("woff2");
  }

  #logo {
    width: 10%;
  }

  ul {
    padding: 0;
  }

  h1 {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    font-family: yuka;

  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #26cac3;
    height: 15vh;
  }

  .logo #title {
    font-family: yuka;
    font-size: 400%;
  }

  .liste {
    width: 75%;
    justify-content: center;
    list-style: none;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  .liste li {
    display: block;
  }

  .liste img {
    width: 35%;
  }

  .top {
    display: flex;
    align-items: center;
  }

  #containListe {
    display: flex;
    justify-content: center;
  }

</style>
