import "./index.scss";
import * as bootstrap from "bootstrap";

function renderItems() {
  const list = document.querySelector("#list");
  for (let i = 0; i < 20; i++) {
    const colItem = document.createElement("div");
    colItem.classList.add("col");
    colItem.innerHTML = `<div class="mt-4">
    <div class="card">
      <img
        src="https://bruce-fe-ec.web.app/images/item.png"
        class="card-img-top"
      />
      <div class="card-body p-2">
        <h5 class="card-title text-primary fw-bold">$2000</h5>
        <p class="card-text" style="font-size: 13px">
          這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳
        </p>
        <p class="text-end m-0" style="font-size: 10px">
          已售出1000
        </p>
        <span
          class="position-absolute top-0 end-0 badge rounded-pill bg-primary"
        >
          雙11優惠
          <span class="visually-hidden">unread messages</span>
        </span>
      </div>
    </div>
  </div>`;
    list.appendChild(colItem);
  }
}

function collapsePCHandler() {
  // get elements
  const collapse = document.getElementById("filter-collapse");
  const collapseBtn = document.getElementById("filter-collapse-btn");
  const collapseBtnText = document.getElementById("filter-btn-text");
  const filterIcon = document.getElementById("filter-icon");

  const bsCollapse = new bootstrap.Collapse(collapse, {
    toggle: false,
  });

  collapseBtn.addEventListener("click", function () {
    bsCollapse.toggle();
  });

  collapse.addEventListener("show.bs.collapse", function () {
    collapseBtnText.innerText = "收起";
    filterIcon.classList.add("transform-rotate-180");
  });
  collapse.addEventListener("hide.bs.collapse", function () {
    collapseBtnText.innerText = "顯示更多";
    filterIcon.classList.remove("transform-rotate-180");
  });
}

function collapseMobileHandler() {
  const collapseMobile = document.getElementById("filter-mobile-collapse");
  const collapseBtnMobile = document.getElementById(
    "filter-mobile-collapse-btn"
  );
  const collapseBtnTextMobile = document.getElementById(
    "filter-mobile-btn-text"
  );
  const filterIconMobile = document.getElementById("filter-mobile-icon");

  // 初始化下拉選單

  const bsCollapseMobile = new bootstrap.Collapse(collapseMobile, {
    toggle: false,
  });

  collapseBtnMobile.addEventListener("click", function () {
    bsCollapseMobile.toggle();
  });

  collapseMobile.addEventListener("show.bs.collapse", function () {
    collapseBtnTextMobile.innerText = "收起";
    filterIconMobile.classList.add("transform-rotate-180");
  });
  collapseMobile.addEventListener("hide.bs.collapse", function () {
    collapseBtnTextMobile.innerText = "顯示更多";
    filterIconMobile.classList.remove("transform-rotate-180");
  });
}

function searchHandler() {
  const searchBtn = document.getElementById("search-btn");
  const itemsWrapper = document.getElementById("items-wrapper");
  const spinnerWrapper = document.getElementById("spinner-wrapper");

  searchBtn.addEventListener("click", function () {
    itemsWrapper.classList.add("d-none");
    spinnerWrapper.classList.remove("d-none");

    setTimeout(function () {
      itemsWrapper.classList.remove("d-none");
      spinnerWrapper.classList.add("d-none");
    }, 1500);
  });
}

// function modalHandler() {
//   const cartBtn = document.getElementById("cart-btn");
//   const cart = new Modal(document.getElementById("cart"), {
//     keyboard: false,
//   });

//   cartBtn.addEventListener("click", function () {
//     cart.toggle();
//   });
// }

function modalHandler() {
  const cartBtn = document.getElementById("cart-btn");
  const cart = new bootstrap.Modal(document.getElementById("cart"), {
    keyboard: false,
  });
  cartBtn.addEventListener("click", () => {
    cart.toggle();
  });
}

collapseMobileHandler();
collapsePCHandler();
renderItems();
searchHandler();
modalHandler();
