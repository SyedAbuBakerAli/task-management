class APIFeatures{
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            title: {
                $regex: this.queryStr.keyword,
                $options: `i`
            }
        } : {}
 

        this.query = this.query.find({...keyword});
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr };
    
        // Removing Fields from the query
        const removeFields = [`keyword`, `limit`, `page`];
        removeFields.forEach(el => delete queryCopy[el]);
    
        // Check if status parameter exists in the query string
        if (queryCopy.status) {
            this.query = this.query.find({ status: queryCopy.status });
            delete queryCopy.status; // Remove status from the query
        }
    
        return this;
    }

}

module.exports = APIFeatures