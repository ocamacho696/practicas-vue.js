const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas:[
            {nombre:'Pera',cantidad:10},
            {nombre:'Manzana',cantidad:0},
            {nombre:'Platano',cantidad:11},
        ],
        nuevaFruta:'',
        totalFruta:0,
        total:0
    },
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre:this.nuevaFruta, cantidad:(this.totalFruta ? this.totalFruta : 0)
            });
            this.nuevaFruta = '';
            this.totalFruta = 0;
        }
    },
    computed:{
        sumarFrutas(){
            this.total=0;
            for (fruta of this.frutas) {
               this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})