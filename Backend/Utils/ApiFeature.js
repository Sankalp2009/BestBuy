class APIFeatures
{
    constructor(query,queryString)
    {
        this.query = query;
        this.queryString = queryString;
    }
    filter()
    {
        const queryObject = {...this.queryString};
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObject[el]);
        let queryStr = JSON.stringify(queryObject);
        queryStr = queryStr.replace('/\b(gte|gt|lte|lt|\b/g)', match => `$${match}`);
        this.query.find(JSON.parse(queryStr));
        return this;
    }
    sort()
    {
        if(this.queryString.sort)
        {
          const sortBy = this.queryString.sort.split(',').join(" ");
          this.query = this.query.sort(sortBy);
        }else
        {
           this.query = this.query.sort("-rating");
        }
        return this;
    }
    paginate()
    {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page-1)*limit;
        this.query  = this.query.skip(skip).limit(limit);
        return this;
    }
}
module.exports = APIFeatures;