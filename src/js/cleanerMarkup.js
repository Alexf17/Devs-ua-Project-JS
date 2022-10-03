// referenceEl is the place where we delete the markup
export function cleanerMarkup(referenceEl) {
  console.log('referenceEl', referenceEl);
  referenceEl.innerHTML = '';
}

// referenceEl is the place where we delete the markup
export function cleanerElement(referenceEl) {
  console.log('referenceEl', referenceEl);
  referenceEl.remove();
}
