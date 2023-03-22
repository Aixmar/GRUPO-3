export const sidesTermsFilter = (props) => {
    const { sides, filterSidesTerms } = props
    const { searchBarSides,filterTaste,filterStock, selectOrderName, selectOrderRating, selectOrderPrice } = filterSidesTerms
    console.log(selectOrderRating);

    const FoundBySearchBar = FilterBySearchBar(sides,searchBarSides)
    const FilteredByTaste = FilterByTaste(FoundBySearchBar,filterTaste)
    const filteredByStock = FilterByStock(FilteredByTaste, filterStock)
    const orderedSidesBySort = OrderBySort(filteredByStock, selectOrderName)
    const orderedSidesByRating = OrderByRating(orderedSidesBySort, selectOrderRating)
    const orderedByPrice = OrderByPrice(orderedSidesByRating, selectOrderPrice)


    return orderedByPrice

}

const FilterBySearchBar = (sides,valueOfSearchBar) => {
    const sidesFiltered = sides.filter(s => {
        const sideName = s.name.trim().toLowerCase();
        const searchValue = valueOfSearchBar?.trim().toLowerCase();
        return sideName.includes(searchValue)
    })
    return sidesFiltered
}

const FilterByTaste = (sides,valueToFilter) => {
    const sidesFiltered = valueToFilter === "Sweet" ?
        sides.filter(s => s.detail.subcategory === "sweet") :
        valueToFilter === "Salad" ?  sides.filter(s => s.detail.subcategory === "salad") : 
        valueToFilter === "Dips" ? sides.filter(s => s.detail.subcategory === "dip") : 
        valueToFilter === "Ice Cream" ? sides.filter(s => s.detail.subcategory === "icecream") : sides
    return sidesFiltered
}

const FilterByStock = (sides, valueToFilter) => {
    const sidesFiltered = valueToFilter === "Available" ?
        sides.filter(s => s.stock > 0) :
        valueToFilter === "No Available" ?
            sides.filter(s => s.stock === 0)
            : sides
    return sidesFiltered
}

const OrderBySort = (sides, order) => {
    const sorteredSides = order === "A-Z" ?
        sides.sort(function (a, b) {
            if (a.name > b.name) return 1
            if (b.name > a.name) return -1
            return 0
        }) :
        order === 'Z-A' ?
            sides.sort(function (a, b) {
                if (a.name > b.name) return -1
                if (b.name > a.name) return 1
                return 0
            }) : sides
    return sorteredSides
}

const OrderByRating = (sides, order) => {
    const orderedSides = order === "Lower Rating" ?
        sides.sort(function (a, b) {
            if (a.rating > b.rating) return 1
            if (b.rating > a.rating) return -1
            return 0
        }) :
        order === "Up Rating" ?
            sides.sort(function (a, b) {
                if (a.rating > b.rating) return -1
                if (b.rating > a.rating) return 1
                return 0
            }) : sides
    return orderedSides
}

const OrderByPrice = (sides, order) => {
    const orderedSides = order === "Lower Price" ?
        sides.sort(function (a, b) {
            if (a.price > b.price) return 1
            if (b.price > a.price) return -1
            return 0
        }) :
        order === "Up Price" ?
            sides.sort(function (a, b) {
                if (a.price > b.price) return -1
                if (b.price > a.price) return 1
                return 0
            }) : sides
    return orderedSides
}