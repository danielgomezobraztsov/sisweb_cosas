### 1. En sample_training.companies, ¿cuántas empresas tienen más empleados que el año en el que se fundaron?

``` mongo
sample_training.companies.countDocuments({$expr: { $gt: ["$number_of_employees", "$founded_year"] }})
```

### 2. En sample_training.companies, ¿en cuántas empresas coinciden su permalink con su twitter_username?

``` mongo
db.companies.countDocuments({ $expr: { $eq: ["$permalink", "$twitter_username"] }})
```

### 3. En sample_airbnb.listingsAndReviews, ¿cuál es el nombre del alojamiento en el que pueden estar más de 6 personas alojadas y tiene exactamente 50 reviews?

``` mongo
db.listingsAndReviews.findOne(
  {
    accommodates: { $gt: 6 },
    number_of_reviews: 50
  },
  { name: 1, _id: 0 }
)
```

### 4. En sample_airbnb.listingsAndReviews, ¿cuántos documentos tienen el "property_type" "House" e incluyen "Changing table" como una de las "amenities"?

``` mongo
db.listingsAndReviews.countDocuments({
  property_type: "House",
  amenities: "Changing table"
})
```

### 5. En sample_training.companies, ¿Cuántas empresas tienen oficinas en Seattle?

``` mongo
db.companies.countDocuments({"offices.city": "Seattle"})
```