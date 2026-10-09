const STRIPE_KEY = process.env.STRIPE_KEY;

if (!STRIPE_KEY) {
  console.error("Falta STRIPE_KEY en el archivo .env");
  process.exit(1);
}

console.log("App iniciada con la llave cargada desde .env");
