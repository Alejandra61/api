class Giphy{
    constructor(keyword){
        this.keyword = keyword;
        this.endpoint = ""; //se debe colocar la url de giphy
        this.api_key = "dc6zaTOxFJmzc";
    }
    //se va a devolver de manera asincrona
    static getUrlAsync(keyword,callback){
        return new Giphy()
    }
}  