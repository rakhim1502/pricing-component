const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPaymentPricingPlanValue = document.querySelectorAll('pricing-plan-value');

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
  elPaymentPeriodRadio.addEventListener('change', function () {
    const period = elPaymentPeriodRadio.value;
    if (period == 'annual') {
      elsPaymentPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('pricing-plan').dataset.paymentAnnual;
      });

    } else{
      elsPaymentPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricng-plan').dataset.paymentMonthly;
      });
    }

  });

});