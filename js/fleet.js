// ===================================================================
// DRIVER FLEET — Our Fleet grid (in the "Drive With Us" section)
//
// HOW TO ADD A NEW CAR:
//   1. Add the car's photo to the images/fleet/ folder.
//   2. Add one line below with its filename and status.
//   3. status: "available" -> shows an "Apply to Rent" button (links to the driver form)
//      status: "booked"    -> shows a grey "Booked" badge (not clickable)
//   The grid updates automatically — no other changes needed.
// ===================================================================
const fleetCars = [
  { image: "images/fleet/car-01.jpg", num: 1, status: "booked" },
  { image: "images/fleet/car-02.jpg", num: 2, status: "booked" },
  { image: "images/fleet/car-03.jpg", num: 3, status: "booked" },
  { image: "images/fleet/car-04.jpg", num: 4, status: "booked" },
  { image: "images/fleet/car-05.jpg", num: 5, status: "booked" },
  { image: "images/fleet/car-06.jpg", num: 6, status: "booked" },
  { image: "images/fleet/car-07.jpg", num: 7, status: "booked" },
  { image: "images/fleet/car-08.jpg", num: 8, status: "booked" },
  { image: "images/fleet/car-09.jpg", num: 9, status: "booked" },
  { image: "images/fleet/car-10.jpg", num: 10, status: "booked" },
  { image: "images/fleet/car-11.jpg", num: 11, status: "booked" },
  { image: "images/fleet/car-12.jpg", num: 12, status: "booked" },
];

const driverFormUrl = "https://forms.gle/8A5kRBSRUosY3T5PA";

const fleetWords = {
  en: { car: "Car", booked: "Booked", apply: "Apply to Rent" },
  bn: { car: "\u0997\u09be\u09a1\u09bc\u09bf", booked: "\u09ac\u09c1\u0995 \u0995\u09b0\u09be \u09b9\u09af\u09bc\u09c7\u099b\u09c7", apply: "\u09ad\u09be\u09a1\u09cd\u09be\u09b0 \u099c\u09a8\u09cd\u09af \u0986\u09ac\u09c7\u09a6\u09a8 \u0995\u09b0\u09c1\u09a8" },
  ar: { car: "\u0633\u064a\u0627\u0631\u0629", booked: "\u0645\u062d\u062c\u0648\u0632\u0629", apply: "\u0642\u062f\u0651\u0645 \u0644\u0644\u0625\u064a\u062c\u0627\u0631" }
};

window.renderFleet = function (lang) {
  const grid = document.getElementById("fleetGrid");
  if (!grid) return;
  const words = fleetWords[lang] || fleetWords.en;
  grid.innerHTML = fleetCars.map(function (car) {
    const label = words.car + " " + car.num;
    const action = car.status === "booked"
      ? '<span class="fleet-status booked">' + words.booked + '</span>'
      : '<a href="' + driverFormUrl + '" target="_blank" rel="noopener" class="fleet-status available">' + words.apply + '</a>';
    return '' +
      '<div class="fleet-card">' +
        '<div class="fleet-photo"><img src="' + car.image + '" alt="' + label + '" loading="lazy"></div>' +
        '<div class="fleet-info">' +
          '<span class="fleet-label">' + label + '</span>' +
          action +
        '</div>' +
      '</div>';
  }).join("");
};

// Initialize fleet grid if it exists on this page
if (document.getElementById("fleetGrid")) {
  window.renderFleet("en");
}
