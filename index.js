let btn=document.querySelector('.btn');
let items=document.querySelector('.items');
let product=document.querySelector('.productdiv');
let products=document.querySelector('.products');
let tbody=document.querySelector('.tbody');
let postdiv=document.querySelector('.postdiv');
let productdiv=document.querySelector('.productdiv');
let todos=document.querySelector('.todos');
//  function promiseAPI1(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         let postdata;
//         let flag=true;
//         fetch("https://dummyjson.com/posts").then((response)=>{
//         if(response.status==200){
//             flag=true;
//         }else{
//             flag=false;
//         }
//         return response.json()
//         }).then((data)=>
//         {
//           resole
//         });
        
//       setTimeout(()=>{
//        let posts=postdata.posts;
//        posts.forEach(element => {
//           let item=document.createElement('div');
//           item.classList.add('item');
//           let top=document.createElement('div');
//           top.classList.add('top');
//           let id=document.createElement('div');
//           id.innerHTML=element.id;
//           id.classList.add('id');
//           let title=document.createElement('div');
//           title.classList.add('title');
//           title.innerHTML=element.title;
//           top.appendChild(id);
//           top.appendChild(title);
//           let body=document.createElement('div');
//           body.classList.add('body');
//           body.innerHTML=element.body;
//           let bottom=document.createElement('div');
//           bottom.classList.add('bottom');
//           let userid=document.createElement('div');
//           userid.classList.add('userid');
//           userid.innerHTML=element.userId;
//           let tags=document.createElement('div');
//           tags.classList.add('tags');
//           tags.innerHTML=element.tags;
//           bottom.appendChild(userid);
//           bottom.appendChild(tags);
//           item.appendChild(top);
//           item.appendChild(body);
//           item.appendChild(bottom);
//           items.appendChild(item);
//        });
//       },2000);
//     if(flag){
//      promiseAPI2();
//     }
//     else{

//     } 
//     },1000)
// })
// }
// function promiseAPI2(){
//     let flag=true;
//     let fetcheddate;
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         fetch("https://dummyjson.com/products").then((response)=>{
//             if(response.status==200){
//                 flag=true;
//             }else{
//                 flag=false;
//             }
//             return response.json()
//             }).then((data)=> {
//                 console.log(data.products);
//              // console.log(fetcheddate);
            
//              for(let i=0;i<data.products.length;i++){
//                  let productdiv=document.createElement('div');
//              productdiv.innerHTML=data.products[i][1];
//              product.appendChild(productdiv);
//              }
             
//             });
//      },2000)
// })
// }
// function promiseAPI3(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
     
//      },3000)
// })
// }
// function btnclicked(){
//     promiseAPI1();
// }
// btn.addEventListener('click',btnclicked);
function promiseAPI1(){
   
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        postdiv.classList.remove('hide');
        fetch("https://dummyjson.com/posts").then((response)=>{
        return response.json()
        }).then((data)=>{
        
          resolve(data.posts);
        });
    },1000)
})
}
function promiseAPI2(){
    productdiv.classList.remove('hide');
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        fetch("https://dummyjson.com/products").then((response)=>{
            return response.json()
            }).then((data)=> {
               // console.log(data.products);
               let productdata=data.products;
               productdata.forEach(element=>{

       let product=document.createElement('div');
       product.classList.add('product');
       let prodocttop=document.createElement('div');
       prodocttop.classList.add('prodocttop');
       let prodid=document.createElement('div');
       prodid.innerHTML=element.id;
       prodid.classList.add('prodid');
       let title=document.createElement('div');
       title.classList.add('title');
       title.innerHTML=element.title;
       prodocttop.appendChild(prodid);
       prodocttop.appendChild(title);

       let catagory=document.createElement('div');
       catagory.classList.add('catagory');
       catagory.innerHTML=element.category;
      
       let body=document.createElement('div');
       body.classList.add('body');
       let bodyleft=document.createElement('bodyleft');
       bodyleft.classList.add('bodyleft');
       let thumbnail=document.createElement('div');
       let div2=document.createElement('div');
      div2.innerHTML=" <img src="+element.thumbnail+" alt='thumbnailpic' width='150px'>";
     thumbnail.appendChild(div2);
       let productinfo=document.createElement('productinfo');
       productinfo.classList.add('productinfo');
       let rat=document.createElement('div');
       rat.classList.add('rat');
       rat.innerHTML=element.rating;
       let brand=document.createElement('div');
       brand.classList.add('brand');
       brand.innerHTML=element.brand;
       let stock=document.createElement('div');
       stock.classList.add('stock');
       stock.innerHTML="only "+element.stock+" is available";
       
       productinfo.appendChild(brand);
       productinfo.appendChild(rat);
       productinfo.appendChild(stock);
      thumbnail.appendChild(productinfo);
      bodyleft.appendChild(thumbnail);
       let bodyright=document.createElement('div');
       bodyright.classList.add('bodyright');

       let offerandprice=document.createElement('div');
       offerandprice.classList.add('offerandprice');
       let price=document.createElement('div');
       price.classList.add('price');
       price.innerHTML=element.price;
       let discount=document.createElement('div');
       discount.classList.add('discount');
       discount.innerHTML=element.discountPercentage;
       offerandprice.appendChild(price);
       offerandprice.appendChild(discount);
       bodyright.appendChild(offerandprice);
       let discription=document.createElement('div');
       discription.classList.add('discription');
       discription.innerHTML=element.description;
       bodyright.appendChild(discription);
       body.appendChild(bodyleft);
       body.appendChild(bodyright);
    let bottomimages=document.createElement('bottomimages');
    bottomimages.classList.add('bottomimages');
    let images=element.images;
        for(let i=0;i<images.length;i++){
            let image=document.createElement('div');
       let div3=document.createElement('div');
      div3.innerHTML=" <img src="+images[i]+" alt='images no ' width='100px'>";
         image.appendChild(div3);
         bottomimages.appendChild(image);
        }

       product.appendChild(prodocttop);
       product.appendChild(catagory);
       product.appendChild(body);
       product.appendChild(bottomimages);
       products.appendChild(product);
               });
              // console.log(typeof productdata)
                resolve(productdata);
            });
     },2000)
})
}
// for(let i=0;i<data.products.length;i++){
//     let productdiv=document.createElement('div');
// productdiv.innerHTML=data.products[i][1];
// product.appendChild(productdiv);
// }

function promiseAPI3(){
    todos.classList.remove('hide');
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        fetch("https://dummyjson.com/todos").then((response)=>{
            return response.json()
            }).then((data)=> {
              //  console.log(data.todos);
              data.todos.forEach(ele=>{
                let tr=document.createElement('tr');
                let td1=tr.appendChild(document.createElement('td'));
                let td2=tr.appendChild(document.createElement('td'));
                let td3=tr.appendChild(document.createElement('td'));
                let td4=tr.appendChild(document.createElement('td'));
              td1.innerHTML=ele.id;
              td2.innerHTML=ele.todo;
              td3.innerHTML=ele.completed;
              td4.innerHTML=ele.userId;
              tbody.appendChild(tr);
            });
                resolve(data.todos);
            });
     },3000)
})
}


function btnclicked(){
   
   
   
    let flag=false;
   promiseAPI1().then(api1=>{
    api1.forEach(element => {
       let item=document.createElement('div');
       item.classList.add('item');
       let top=document.createElement('div');
       top.classList.add('top');
       let id=document.createElement('div');
       id.innerHTML=element.id;
       id.classList.add('id');
       let title=document.createElement('div');
       title.classList.add('title');
       title.innerHTML=element.title;
       top.appendChild(id);
       top.appendChild(title);
       let body=document.createElement('div');
       body.classList.add('body');
       body.innerHTML=element.body;
       let bottom=document.createElement('div');
       bottom.classList.add('bottom');
       let userid=document.createElement('div');
       userid.classList.add('userid');
       userid.innerHTML=element.userId;
       let tags=document.createElement('div');
       tags.classList.add('tags');
       tags.innerHTML=element.tags;
       bottom.appendChild(userid);
       bottom.appendChild(tags);
       item.appendChild(top);
       item.appendChild(body);
       item.appendChild(bottom);
       items.appendChild(item);
    });
    promiseAPI2();
    }).then(api2=>{
   promiseAPI3();
}).then(api3=>{
   
}).catch(e=>{

    console.log(e);
});
}
btn.addEventListener('click',btnclicked);