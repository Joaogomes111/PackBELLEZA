document.getElementById('year').textContent = new Date().getFullYear();

// Keep campaign attribution when visitors move to the existing Hotmart checkout.
const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src'];
const currentParams = new URLSearchParams(window.location.search);
document.querySelectorAll('.checkout-link').forEach((link) => {
  const checkout = new URL(link.href);
  campaignKeys.forEach((key) => {
    const value = currentParams.get(key);
    if (value) checkout.searchParams.set(key, value);
  });
  link.href = checkout.toString();
  link.addEventListener('click', () => {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'checkout_click', cta_position: link.dataset.cta || 'unknown' });
    }
  });
});

