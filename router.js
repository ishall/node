function route(handle, pathname){
    console.log("route " + pathname);

    if(typeof handle[pathname] ==='function'){
        handle[pathname]();
    }
    else{
        console.log("no request found for " + pathname);
    }
}

exports.route = route;