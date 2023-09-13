
function createProduct(product) {
    const wrapper = document.createElement("tr");

    wrapper.innerHTML = `
    <td>${product.name}</td>
<td>${product.image}</td>
<td>${product.description1}</td>
<td>${product.description2}</td>
<td> 
  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
    <button data-id="${product.id}" type="button" class="btn btn-warning editBtn">ویرایش محصول</button>
    <button data-id="${product.id}" type="button" class="btn btn-danger delBtn"> حذف محصول </button>
  </div>
</td>`
return wrapper;
}