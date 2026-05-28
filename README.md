# Rence Material

A powerful, high-performance front-end framework that fuses the functional stability of **Bootstrap 5** with the visual elegance of **Google Material Design 3**.

**[📖 Official Documentation & Live Demos](https://davidabalaku.github.io/material)**

Developed and designed by **david abalaku**.

---

## ⚡ Quick Start (CDN)

You can drop Rence Material into any project instantly using jsDelivr. Since the framework relies purely on CSS for Material interactions, simply include the compiled stylesheet inside your `<head>` alongside standard Bootstrap 5.

```html
<!-- Rence Material Framework CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davidabalaku/material@main/dist/css/rence-material.min.css">
<!-- Rence Material Ripple Engine JS -->
<script src="https://cdn.jsdelivr.net/gh/davidabalaku/material@main/dist/js/rence-material.min.js"></script>
```

---

## 🚀 Starter Template

Here is a bare-bones HTML template to get you up and running immediately:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Rence Material App</title>

    <!-- 1. Google Fonts & Material Icons -->
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link rel="preconnect" href="https://cdn.jsdelivr.net/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" crossorigin>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" crossorigin>

    <!-- 2. Rence Material Framework CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/davidabalaku/material@main/dist/css/rence-material.min.css">
  </head>
  <body>
    
    <div class="container py-5">
      <h1 class="fw-light text-primary mb-4">Hello, Material!</h1>
      <button class="btn btn-primary d-inline-flex align-items-center gap-2">
        <span class="material-icons">rocket_launch</span>
        Get Started
      </button>
      <button class="btn btn-tonal">Tonal Button</button>
    </div>

    <!-- 3. Bootstrap 5 Core JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" crossorigin></script>

    <!-- 4. Rence Material Ripple Engine JS -->
    <script src="https://cdn.jsdelivr.net/gh/davidabalaku/material@main/dist/js/rence-material.min.js"></script>
  </body>
</html>
```

## 📄 License
Authored and maintained by **david abalaku**. 
Based upon Bootstrap 5 and Google Material Design principles.
