Vue.createApp({
    data(){
        return{
            wordRaw: "",
            wordLowerCase: "",
            wordUpperCase: "",
            wordCapitalized: "",
            wordEndCapitalized: "",
            wordReversed: "",
        }
    },

    methods: {
        toNormal() {
            return this.wordRaw;
        },

        toLowercase() {
            this.wordLowerCase = this.wordRaw.toLowerCase();
            return this.wordLowerCase;
        },

        toUppercase() {
            this.wordUpperCase = this.wordRaw.toUpperCase();
            return this.wordUpperCase;
        },

        toCapitalized() {
            let firstLetter = this.wordRaw.charAt(0).toUpperCase();
            this.wordCapitalized = firstLetter + this.wordRaw.slice(1).toLowerCase();
            return this.wordCapitalized;
        },

        toEndCapitalized() {
            let lastLetter = this.wordRaw.charAt(this.wordRaw.length-1).toUpperCase();
            this.wordEndCapitalized = this.wordRaw.slice(0, this.wordRaw.length-1).toLowerCase() + lastLetter;
            return this.wordEndCapitalized;
        },

        toReversed() {
            this.wordReversed = this.wordRaw.split('').reverse().join('');;
            return this.wordReversed;
        },

        toggleList() {
              const list = document.getElementById("list");
              if (list.style.display === "none") {
                list.style.display = "block";
              } else {
                list.style.display = "none";
            }              
        },

        toggleTable(){
            const table = document.getElementById("myTable");
              if (table.style.display === "none") {
                table.style.display = "block";
              } else {
                table.style.display = "none";
              }            
        },
          

        StringManipulations() {
            this.toNormal();
            this.toLowercase();
            this.toUppercase();
            this. toCapitalized();
            this.toEndCapitalized(); 
            this.toReversed(); 
            this.toggleList(); 
            this.toggleTable();     
        }
    }
}).mount("#app")