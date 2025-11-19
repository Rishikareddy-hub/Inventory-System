async function loadProducts() {
  const res = await fetch("http://localhost:4000/api/products");
  const products = await res.json();

  let html = "<tr><th>Name</th><th>Qty</th><th>Price</th><th>Action</th></tr>";
  products.forEach(p => {
    html += `
      <tr>
        <td>${p.name}</td>
        <td>${p.quantity}</td>
        <td>${p.price}</td>
        <td>
          <button class="delete-btn action-btn" onclick="deleteProduct(${p.id})">Delete</button>
        </td>
      </tr>`;
  });

  document.getElementById("productTable").innerHTML = html;
}

loadProducts();

document.getElementById("productForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  await fetch("http://localhost:4000/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, quantity, price })
  });

  loadProducts();
  e.target.reset();
});

async function deleteProduct(id) {
  await fetch(`http://localhost:4000/api/products/${id}`, { method: "DELETE" });
  loadProducts();
}
