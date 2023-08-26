function createProduct(product) {
  const wrapper = document.createElement("div");

  wrapper.classList.add('col-xl-3','col-lg-4','col-sm-6');


  wrapper.innerHTML = `<a target="_blank" href="/product-detail.html?id=${product.id}"> <div class="product">
    <span class="pr_flash bg_green">فروش</span>
    <div class="product_img">
        <img src="${product.image}"
                         alt="product_img1">
        <div class="product_action_box">
            <ul class="list_none pr_action_btn">
                <li><span><i class="ti-shopping-cart"></i></span></li>
                <li>
                    <span class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="ti-eye"></i></span></li>
            </ul>
        </div>
    </div>
    <div class="product_info">
        <h6><span>${product.description1}</span></h6>
        <span class="price">${product.price} تومان</span>
    </div>
</div></a>`;

return wrapper;
}

function createProducts(products){
    const listWrapper = document.getElementById('producst');

    for(const product of products){
        const productEl = createProduct(product);
        listWrapper.append(productEl);
    }
}
