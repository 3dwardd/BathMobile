const STORAGE_KEY = 'bathmobileBookings';

const PRICE_CATALOG = {
  'Home Service': {
    'Value Bath': {
      sizes: { Small: 330, Medium: 420, Large: 450, 'X-Large': 570, Vans: 620 },
      note: 'Starter wash with vacuum and wipe-down.'
    },
    'Wax N Bath': {
      sizes: { Small: 550, Medium: 600, Large: 700, 'X-Large': 750, Vans: 900 },
      note: 'Signature wash with wax and shine.'
    },
    'Prime Bath': {
      sizes: { Small: 800, Medium: 850, Large: 950, 'X-Large': 1000, Vans: 1150 },
      note: 'Premium carwash with extra protection.'
    },
    'Seat & Carpet Pull Out': {
      sizes: { Small: 5500, Medium: 6000, Large: 6500, 'X-Large': 7000, Vans: 7500 },
      note: 'Deep interior cleaning with seat removal.'
    },
    'Seat Pull Out Only': {
      sizes: { Small: 4500, Medium: 5000, Large: 5500, 'X-Large': 6000, Vans: 6500 },
      note: 'Deep cleaning with seat removal only.'
    },
    'No Baklas': {
      sizes: { Small: 3500, Medium: 4000, Large: 4500, 'X-Large': 5000, Vans: 5500 },
      note: 'Interior cleaning without full dismantling.'
    },
    'Exterior Detail': {
      sizes: { Small: 5500, Medium: 6500, Large: 7500, 'X-Large': 8500, Vans: 9500 },
      note: 'Restoration and exterior polishing services.'
    },
    'Ceramic Coating': {
      sizes: { 'Motorcycle / Scooter': 3500, 'Big Bike': 4500, Small: 10500, Medium: 11500, Large: 12500, 'X-Large': 13500, Vans: 14500 },
      note: 'Premium ceramic coating with warranty.'
    },
    'Back to Black Trim': {
      sizes: { Small: 450, Medium: 550, Large: 950, 'X-Large': 1050, Vans: 1100 },
      note: 'Plastic and rubber restoration.'
    },
    'Engine Detail': {
      sizes: { Small: 3500, Medium: 3500, Large: 4000, 'X-Large': 4000, Vans: 4500 },
      note: 'Engine bay cleaning and dressing.'
    },
    'Headlight Restoration': {
      sizes: { Small: 2500, Medium: 2500, Large: 2500, 'X-Large': 2500, Vans: 2500 },
      note: 'Restore faded headlights.'
    },
    'Watermarks / Acid Rain Removal': {
      sizes: { Small: 1500, Medium: 1500, Large: 1500, 'X-Large': 1500, Vans: 1500 },
      note: 'Glass and paint contamination removal.'
    },
    'Color Revival Buff': {
      sizes: { Small: 2500, Medium: 3000, Large: 4000, 'X-Large': 5000, Vans: 6000 },
      note: 'Two-step buff and shine process.'
    }
  },
  'In-Shop Wash': {
    'Motorcycle Bath': {
      sizes: { 'Motorcycle / Scooter': 100, 'Big Bike': 150 },
      note: 'Basic motorcycle wash and dry.'
    },
    'Value Bath': {
      sizes: { Small: 180, Medium: 200, Large: 250, 'X-Large': 300, Vans: 350 },
      note: 'Starter in-shop wash package.'
    },
    'Wax N Bath': {
      sizes: { Small: 450, Medium: 500, Large: 600, 'X-Large': 650, Vans: 800 },
      note: 'Wash with wax and gloss finish.'
    },
    'Prime Bath': {
      sizes: { Small: 600, Medium: 650, Large: 750, 'X-Large': 800, Vans: 950 },
      note: 'Premium wash with added protection.'
    },
    'Seat & Carpet Pull Out': {
      sizes: { Small: 4500, Medium: 5000, Large: 5500, 'X-Large': 6000, Vans: 6500 },
      note: 'Deep interior cleaning and sanitation.'
    },
    'Seat Pull Out Only': {
      sizes: { Small: 3500, Medium: 4000, Large: 4500, 'X-Large': 5000, Vans: 5500 },
      note: 'Deep clean with seats removed.'
    },
    'No Baklas': {
      sizes: { Small: 2500, Medium: 3000, Large: 3500, 'X-Large': 4000, Vans: 4500 },
      note: 'Interior service without dismantling.'
    }
  }
};

const PACKAGE_FEATURES = {
  'Value Bath': ['Pressurized foam wash', 'Vacuum and wipe-down', 'Tire black', 'Blow dry'],
  'Wax N Bath': ['Everything in Value Bath', 'Wax finish', 'Glass cleaning', 'Hand buffing'],
  'Prime Bath': ['Everything in Wax N Bath', 'Engine bay cleaning', 'Water repellent', 'Disinfectant'],
  'Seat & Carpet Pull Out': ['Seat removal', 'Steam cleaning', 'Shampoo', 'Disinfectant'],
  'Seat Pull Out Only': ['Seat removal', 'Steam cleaning', 'Interior protectant', 'Armor shine'],
  'No Baklas': ['Steam cleaning', 'Door panel cleaning', 'Dashboard cleaning', 'Free Value Bath'],
  'Exterior Detail': ['Clay bar', 'Scratch removal', 'Headlight restoration', '5-step shine'],
  'Ceramic Coating': ['5-step detail', '3-layer ceramic coating', 'Warranty coverage', 'Free wash after 1 week'],
  'Back to Black Trim': ['Trim restoration', 'Rubber and plastic parts', 'Interior and exterior surfaces'],
  'Engine Detail': ['Engine wash', 'Degreasing', 'Detail brushing', 'Polishing'],
  'Headlight Restoration': ['Restoration and protection', 'Improves clarity', 'Front exterior only'],
  'Watermarks / Acid Rain Removal': ['Glass removal service', 'Body panel removal service', 'Spot treatment'],
  'Color Revival Buff': ['2-step buffing', 'Paint shine restoration', 'Stubborn stain removal'],
  'Motorcycle Bath': ['Pressurized foam wash', 'Tire black', 'Blow dry']
};

const LOCATION_OPTIONS = ['Home Service', 'In-Shop Wash'];
const SIZE_OPTIONS = ['Small', 'Medium', 'Large', 'X-Large', 'Vans', 'Motorcycle / Scooter', 'Big Bike'];
const BOOKING_STORAGE_KEY = STORAGE_KEY;

function formatPeso(value) {
  return '₱' + Number(value || 0).toLocaleString('en-PH');
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '-';
  return new Intl.DateTimeFormat('en-PH', {
    month: 'short', day: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true
  }).format(date);
}

function normalizeStatus(value) {
  const status = String(value || 'Pending').trim().toLowerCase();
  if (status === 'done') return 'Done';
  if (status === 'cancelled' || status === 'canceled') return 'Cancelled';
  return 'Pending';
}

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(BOOKING_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveBookings(bookings) {
  localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookings));
}

function getPrice(serviceLocation, packageName, vehicleSize) {
  const packageData = PRICE_CATALOG?.[serviceLocation]?.[packageName];
  if (!packageData) return null;
  const price = packageData.sizes?.[vehicleSize];
  return Number.isFinite(price) ? price : null;
}

function setBookingOptions() {
  const serviceSelect = document.getElementById('service_location');
  const packageSelect = document.getElementById('package');
  const sizeSelect = document.getElementById('vehicle_size');

  if (!serviceSelect || !packageSelect || !sizeSelect) return;

  function renderPackages() {
    const serviceLocation = serviceSelect.value;
    const packages = Object.keys(PRICE_CATALOG[serviceLocation] || {});
    packageSelect.innerHTML = packages.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
  }

  function renderSizes() {
    const serviceLocation = serviceSelect.value;
    const packageName = packageSelect.value;
    const allowedSizes = Object.keys(PRICE_CATALOG?.[serviceLocation]?.[packageName]?.sizes || {});
    const sizes = allowedSizes.length ? allowedSizes : SIZE_OPTIONS;
    sizeSelect.innerHTML = sizes.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
  }

  serviceSelect.addEventListener('change', () => {
    renderPackages();
    renderSizes();
    updateEstimatedPrice();
  });
  packageSelect.addEventListener('change', () => {
    renderSizes();
    updateEstimatedPrice();
  });
  sizeSelect.addEventListener('change', updateEstimatedPrice);

  renderPackages();
  renderSizes();
}

function updateEstimatedPrice() {
  const serviceLocation = document.getElementById('service_location')?.value;
  const packageName = document.getElementById('package')?.value;
  const vehicleSize = document.getElementById('vehicle_size')?.value;
  const priceEl = document.getElementById('estimated_price');
  const hintEl = document.getElementById('price_hint');
  const hiddenInput = document.getElementById('estimated_price_input');

  if (!serviceLocation || !packageName || !vehicleSize || !priceEl) return;
  const price = getPrice(serviceLocation, packageName, vehicleSize);

  if (price === null) {
    priceEl.textContent = 'N/A';
    if (hintEl) hintEl.textContent = 'No price available for the selected combination.';
    if (hiddenInput) hiddenInput.value = '0';
    return;
  }

  priceEl.textContent = formatPeso(price);
  if (hintEl) hintEl.textContent = `${serviceLocation} • ${packageName} • ${vehicleSize}`;
  if (hiddenInput) hiddenInput.value = String(price);
}

function renderPricePanels() {
  const homePriceContainer = document.getElementById('home-price');
  const shopPriceContainer = document.getElementById('shop-price');
  const homeServiceGrid = document.getElementById('home-service-packages');
  const shopServiceGrid = document.getElementById('shop-service-packages');

  if (homePriceContainer) homePriceContainer.innerHTML = renderPriceCards('Home Service');
  if (shopPriceContainer) shopPriceContainer.innerHTML = renderPriceCards('In-Shop Wash');
  if (homeServiceGrid) homeServiceGrid.innerHTML = renderPriceCards('Home Service');
  if (shopServiceGrid) shopServiceGrid.innerHTML = renderPriceCards('In-Shop Wash');
}

function renderPriceCards(serviceLocation) {
  const packages = PRICE_CATALOG[serviceLocation] || {};
  return Object.entries(packages).map(([name, meta], index) => {
    const features = PACKAGE_FEATURES[name] || ['Service details available upon booking.'];
    const priceRows = Object.entries(meta.sizes || {})
      .map(([size, price]) => `<div><dt>${escapeHtml(size)}</dt><dd>${formatPeso(price)}</dd></div>`)
      .join('');
    const accent = index % 2 === 0 ? 'blue' : 'orange';
    return `
      <article class="package-card ${index === 1 ? 'featured-card' : ''}">
        <div class="package-header ${accent}">
          <h4>${escapeHtml(name)}</h4>
          <p>${escapeHtml(meta.note || '')}</p>
        </div>
        <ul>${features.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        <dl class="price-list">${priceRows}</dl>
      </article>
    `;
  }).join('');
}

function renderServicePanels() {
  const serviceTabs = document.querySelectorAll('.service-tab');
  const servicePanels = document.querySelectorAll('.service-panel');
  serviceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      serviceTabs.forEach(item => item.classList.toggle('active', item === tab));
      servicePanels.forEach(panel => {
        const active = panel.id === targetId;
        panel.classList.toggle('active', active);
        panel.hidden = !active;
      });
    });
  });
}

function activateHomePanel(targetId, updateHash = false) {
  const tabs = document.querySelectorAll('.panel-tab');
  const panels = document.querySelectorAll('.panel');

  tabs.forEach(item => {
    const active = item.dataset.target === targetId;
    item.classList.toggle('active', active);
    item.setAttribute('aria-selected', String(active));
  });

  panels.forEach(panel => {
    const active = panel.id === targetId;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
  });

  if (updateHash) {
    const hash = targetId === 'service-price-panel' ? '#service-price' : '#booking';
    if (window.location.hash !== hash) {
      history.replaceState(null, '', hash);
    }
  }
}

function renderBookingPriceTabs() {
  const tabs = document.querySelectorAll('.panel-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activateHomePanel(tab.dataset.target, true);
    });
  });

  document.querySelectorAll('a[href="#booking"], a[href="#service-price"]').forEach(link => {
    link.addEventListener('click', () => {
      window.setTimeout(syncHomeFromHash, 0);
    });
  });
}

function setupBookingForm() {
  const form = document.getElementById('booking');
  const dateInput = document.getElementById('booking_date');
  if (dateInput) dateInput.min = new Date().toISOString().slice(0, 10);
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const service_location = document.getElementById('service_location')?.value || '';
    const packageName = document.getElementById('package')?.value || '';
    const vehicle_size = document.getElementById('vehicle_size')?.value || '';
    const booking_date = document.getElementById('booking_date')?.value || '';
    const booking_time = document.getElementById('booking_time')?.value || '';
    const address = document.getElementById('address')?.value.trim() || '';
    const estimated_price = Number(document.getElementById('estimated_price_input')?.value || '0');

    if (!service_location || !packageName || !vehicle_size || !booking_date || !booking_time || !address) {
      alert('Please complete all fields before booking.');
      return;
    }

    const schedule = `${booking_date}T${booking_time}`;
    const timestamp = new Date(schedule);
    if (Number.isNaN(timestamp.getTime())) {
      alert('Please choose a valid schedule.');
      return;
    }
    if (timestamp.getTime() < Date.now()) {
      alert('Please choose a future date and time.');
      return;
    }

    const hour = timestamp.getHours();
    if (hour < 7 || hour > 17) {
      alert('Service time must be between 7:00 AM and 5:00 PM.');
      return;
    }

    const price = getPrice(service_location, packageName, vehicle_size);
    if (price === null) {
      alert('The selected service package and size do not have a valid price.');
      return;
    }

    const bookings = getBookings();
    const duplicate = bookings.some(item =>
      item.service_location === service_location &&
      item.schedule === schedule &&
      item.status !== 'Cancelled'
    );

    if (duplicate) {
      alert('This slot is already reserved.');
      return;
    }

    bookings.unshift({
      id: Date.now(),
      service_location,
      package: packageName,
      vehicle_size,
      booking_date,
      booking_time,
      schedule,
      address,
      estimated_price: price,
      status: 'Pending',
      created_at: new Date().toISOString()
    });

    saveBookings(bookings);
    window.location.href = 'view.html?success=1';
  });
}

function renderDashboard() {
  const bookings = getBookings().map(item => ({ ...item, status: normalizeStatus(item.status) }));
  const groups = {
    Pending: bookings.filter(item => item.status === 'Pending'),
    Done: bookings.filter(item => item.status === 'Done'),
    Cancelled: bookings.filter(item => item.status === 'Cancelled')
  };

  const total = bookings.length;
  const done = groups.Done.length;
  const cancelled = groups.Cancelled.length;
  const pending = groups.Pending.length;

  setText('total_count', total);
  setText('pending_count', pending);
  setText('done_count', done);
  setText('cancelled_count', cancelled);

  renderSection('active', groups.Pending, 'orange', true);
  renderSection('completed', groups.Done, 'blue', false);
  renderSection('cancelled', groups.Cancelled, 'blue', false);
}

function renderSection(id, rows, accent, showActions) {
  const panel = document.getElementById(id);
  if (!panel) return;

  if (!rows.length) {
    panel.innerHTML = '<div class="empty-state">No reservations found.</div>';
    return;
  }

  panel.innerHTML = `
    <div class="panel-title">
      <h2>${capitalize(id)} Reservations</h2>
      <span>${rows.length} record(s)</span>
    </div>
    <div class="reservation-grid">
      ${rows.map(row => renderReservationCard(row, accent, showActions)).join('')}
    </div>
  `;

  panel.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.id);
      const status = button.dataset.action;
      updateBookingStatus(id, status);
    });
  });
}

function renderReservationCard(row, accent, showActions) {
  const displayId = `#${String(row.id).slice(-4)}`;
  return `
    <article class="reservation-card">
      <div class="reservation-card-header ${accent}">
        <div>
          <h3>Reservation ${displayId}</h3>
          <p>${escapeHtml(row.package || '-')}</p>
        </div>
        <span class="status-pill ${statusClass(row.status)}">${escapeHtml(row.status)}</span>
      </div>
      <div class="reservation-card-body">
        <div class="info-grid">
          <div class="info-item"><span class="label">Location</span><span class="value">${escapeHtml(row.service_location || '-')}</span></div>
          <div class="info-item"><span class="label">Vehicle Size</span><span class="value">${escapeHtml(row.vehicle_size || '-')}</span></div>
          <div class="info-item"><span class="label">Schedule</span><span class="value">${escapeHtml(formatDateTime(row.schedule))}</span></div>
          <div class="info-item"><span class="label">Created</span><span class="value">${escapeHtml(formatDateTime(row.created_at))}</span></div>
          <div class="info-item"><span class="label">Service Price</span><span class="value">${escapeHtml(formatPeso(row.estimated_price))}</span></div>
          <div class="info-item full"><span class="label">Address / Note</span><span class="value">${escapeHtml(row.address || '-')}</span></div>
        </div>
        ${showActions ? `
          <div class="action-bar">
            <button class="action-btn done" type="button" data-action="Done" data-id="${row.id}">Mark Done</button>
            <button class="action-btn cancel" type="button" data-action="Cancelled" data-id="${row.id}">Cancel</button>
          </div>
        ` : ''}
      </div>
    </article>
  `;
}

function updateBookingStatus(id, status) {
  const bookings = getBookings();
  const idx = bookings.findIndex(item => Number(item.id) === Number(id));
  if (idx === -1) return;
  bookings[idx].status = normalizeStatus(status);
  saveBookings(bookings);
  renderDashboard();
}

function activateDashboardTab(target, updateHash = false) {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    const active = button.dataset.target === target;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });

  tabPanels.forEach(panel => {
    const active = panel.id === target;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
  });

  if (updateHash && window.location.hash !== `#${target}`) {
    history.replaceState(null, '', `#${target}`);
  }
}

function setupDashboardTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => activateDashboardTab(button.dataset.target, true));
  });

  document.querySelectorAll('a[href="#active"], a[href="#completed"], a[href="#cancelled"]').forEach(link => {
    link.addEventListener('click', () => {
      window.setTimeout(syncDashboardFromHash, 0);
    });
  });
}

function showQueryNotices() {
  const params = new URLSearchParams(window.location.search);
  const success = document.getElementById('success_notice');
  const error = document.getElementById('error_notice');
  if (params.has('success') && success) success.hidden = false;
  if (params.has('error') && error) error.hidden = false;
}

function syncHomeFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'service-price') {
    activateHomePanel('service-price-panel', false);
  } else {
    activateHomePanel('booking-panel', false);
  }
}

function syncDashboardFromHash() {
  const hash = window.location.hash.replace('#', '');
  const target = ['active', 'completed', 'cancelled'].includes(hash) ? hash : 'active';
  activateDashboardTab(target, false);
}

function renderHomeSections() {
  setBookingOptions();
  renderPricePanels();
  renderServicePanels();
  renderBookingPriceTabs();
  setupBookingForm();
  updateEstimatedPrice();
  syncHomeFromHash();
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = String(value);
}

function capitalize(value) {
  return String(value || '').charAt(0).toUpperCase() + String(value || '').slice(1);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  if (page === 'home') {
    renderHomeSections();
    window.addEventListener('hashchange', syncHomeFromHash);
  }

  if (page === 'dashboard') {
    showQueryNotices();
    setupDashboardTabs();
    renderDashboard();
    syncDashboardFromHash();
    window.addEventListener('hashchange', syncDashboardFromHash);
  }
});
