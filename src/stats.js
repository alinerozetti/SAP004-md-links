const stats = (array, validate) => {
    const hrefs = array.map((item)=>{
        return item.href;
    });
    const status = array.filter((item)=>{
        if(item.status === 'fail - 404')
            return 1;
    });
    return validate ? {"Unique": [...new Set(hrefs)].length,  "All": hrefs.length, "Broken": status.length} : 
                        {"Unique": [...new Set(hrefs)].length,  "All": hrefs.length};
}

module.exports = stats;