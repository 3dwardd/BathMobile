<?php
$pageTitle = 'BathMobile | Door-to-Door Car Wash Reservation System';

$services = [
  [
    'class' => 'shop-visit',
    'title' => 'In-Shop Wash',
    'text' => 'Customers can reserve a shop visit and arrive at a scheduled time with less waiting.'
  ],
  [
    'class' => 'home-service',
    'title' => 'Door-to-Door Wash',
    'text' => 'The service vehicle can go directly to the customer after the address is submitted.'
  ],
  [
    'class' => 'service-packages',
    'title' => 'Service Packages',
    'text' => 'Admins can update service names, details, and prices as business offerings change.'
  ]
];

$features = [
  ['title' => 'User Registration & Login', 'text' => 'Customer and admin accounts support secure access and profile management.'],
  ['title' => 'Reservation System', 'text' => 'Users book shop visits or home service appointments with date, time, and service type.'],
  ['title' => 'Service Management', 'text' => 'Admins can add, edit, and remove car wash packages and prices.'],
  ['title' => 'Customer Dashboard', 'text' => 'Customers view booking history, upcoming appointments, and payment status.'],
  ['title' => 'Admin Dashboard', 'text' => 'Staff view all reservations, update availability, and manage schedules.'],
  ['title' => 'Location Integration', 'text' => 'The system shows the shop location and accepts home addresses for mobile service.']
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo htmlspecialchars($pageTitle); ?></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="#home" aria-label="BathMobile home">
      <img class="brand-logo" src="bathmobile.logo.svg" alt="BathMobile logo">
      <span>BathMobile</span>
    </a>
    <nav class="nav-links" aria-label="Main navigation">
      <a href="#services">Services</a>
      <a href="#booking">Reservations</a>
      <a href="#dashboards">Dashboards</a>
      <a href="#security">Security</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-content">
        <p class="eyebrow">Car wash reservations, made simple</p>
        <h1>BathMobile</h1>
        <p class="hero-copy">
          A web-based reservation system for in-shop and door-to-door car wash services.
          Customers book faster, while staff manage schedules, packages, and records from one organized system.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#booking">Start Booking</a>
          <a class="button secondary" href="#features">View Features</a>
        </div>
      </div>

      <form class="booking-panel" id="booking" action="#" method="post">
        <div class="panel-heading">
          <p>Quick Reservation</p>
          <span>Available today</span>
        </div>
        <label>
          Service Type
          <select name="service_type">
            <option>Home Service Wash</option>
            <option>In-Shop Wash</option>
            <option>Full Detail Package</option>
          </select>
        </label>
        <label>
          Preferred Schedule
          <input type="datetime-local" name="schedule">
        </label>
        <label>
          Service Address
          <input type="text" name="address" placeholder="Enter home address or shop visit">
        </label>
        <button type="submit">Reserve Slot</button>
      </form>
    </section>

    <section class="section intro-section">
      <div class="section-heading">
        <p class="eyebrow">Project Analysis</p>
        <h2>Built for customers and car wash staff</h2>
      </div>
      <div class="audience-grid">
        <article class="audience-card">
          <span class="card-icon">01</span>
          <h3>For Car Owners</h3>
          <p>Book a reliable car wash without phone calls, repeated messages, or manual forms.</p>
        </article>
        <article class="audience-card">
          <span class="card-icon">02</span>
          <h3>For Business Staff</h3>
          <p>Track reservations, schedules, customer records, service packages, and availability in one place.</p>
        </article>
      </div>
    </section>

    <section class="section services-section" id="services">
      <div class="section-heading">
        <p class="eyebrow">Service Options</p>
        <h2>Flexible washing for different customer needs</h2>
      </div>
      <div class="service-grid">
        <?php foreach ($services as $service): ?>
          <article class="service-card">
            <div class="service-media <?php echo htmlspecialchars($service['class']); ?>"></div>
            <h3><?php echo htmlspecialchars($service['title']); ?></h3>
            <p><?php echo htmlspecialchars($service['text']); ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="section flow-section">
      <div class="section-heading">
        <p class="eyebrow">Reservation Flow</p>
        <h2>From account to confirmed appointment</h2>
      </div>
      <div class="flow">
        <div class="flow-step">
          <span>1</span>
          <h3>Create Account</h3>
          <p>Customers register and log in securely before managing their profile and bookings.</p>
        </div>
        <div class="flow-step">
          <span>2</span>
          <h3>Choose Service</h3>
          <p>Users select a wash type, preferred date, time, and service location.</p>
        </div>
        <div class="flow-step">
          <span>3</span>
          <h3>Track Status</h3>
          <p>The dashboard shows upcoming appointments, booking history, and payment status.</p>
        </div>
        <div class="flow-step">
          <span>4</span>
          <h3>Staff Updates</h3>
          <p>Admins manage schedules, availability, service packages, and customer records.</p>
        </div>
      </div>
    </section>

    <section class="section feature-section" id="features">
      <div class="section-heading">
        <p class="eyebrow">Core Features</p>
        <h2>System modules from the proposal</h2>
      </div>
      <div class="feature-grid">
        <?php foreach ($features as $feature): ?>
          <article>
            <h3><?php echo htmlspecialchars($feature['title']); ?></h3>
            <p><?php echo htmlspecialchars($feature['text']); ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="section dashboard-section" id="dashboards">
      <div class="section-heading">
        <p class="eyebrow">Dashboard Preview</p>
        <h2>Clear booking views for both sides</h2>
      </div>
      <div class="dashboard-grid">
        <article class="dashboard-card">
          <div class="dashboard-top">
            <h3>Customer View</h3>
            <span>Confirmed</span>
          </div>
          <div class="status-row">
            <p>Home Service Wash</p>
            <strong>10:30 AM</strong>
          </div>
          <div class="status-row">
            <p>Payment Status</p>
            <strong>Pending</strong>
          </div>
          <div class="progress-track">
            <span></span>
          </div>
        </article>
        <article class="dashboard-card">
          <div class="dashboard-top">
            <h3>Admin Queue</h3>
            <span>4 slots</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A. Santos</td>
                <td>Shop</td>
                <td>Ready</td>
              </tr>
              <tr>
                <td>M. Reyes</td>
                <td>Home</td>
                <td>On route</td>
              </tr>
              <tr>
                <td>J. Cruz</td>
                <td>Detail</td>
                <td>Review</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </section>

    <section class="section security-section" id="security">
      <div class="security-copy">
        <p class="eyebrow">Security & Scope</p>
        <h2>Designed for a PHP and MySQL project build</h2>
        <p>
          The complete system scope includes session management, admin-only page restrictions,
          input validation, SQL injection protection, and XSS protection. The proposed stack is
          HTML, CSS, JavaScript, PHP, and MySQL.
        </p>
      </div>
      <div class="security-list">
        <span>Validated forms</span>
        <span>Protected sessions</span>
        <span>Admin-only access</span>
        <span>Clean customer records</span>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>BathMobile: Door-to-Door Car Wash Reservation System</p>
    <a href="#home">Back to top</a>
  </footer>
</body>
</html>
