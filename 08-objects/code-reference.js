// ==========================================
// TEMA: Objetos (Objects) en JavaScript
// ==========================================
console.log("==========================================");
console.log("📌 TEMA: Objetos (Objects) en JavaScript");
console.log("==========================================");

// --- 1. Declaración y acceso a propiedades ---
console.log("\n--- 1. Declaración y acceso a propiedades ---");

// Declaración de un objeto literal con distintas propiedades
const nota = {
    id: 1,
    title: "Mi primera nota",
    content: "Contenido de la nota",
    createdAt: Date.now()
};

// Acceso con notación de punto (dot notation)
console.log("Acceso con punto (nota.id):", nota.id);
console.log("Acceso con punto (nota.title):", nota.title);
console.log("Acceso con punto (nota.content):", nota.content);
console.log("Acceso con punto (nota.createdAt):", nota.createdAt);

// Acceso mediante corchetes usando una variable dinámica
const campo = "content";
console.log("Acceso con corchetes (nota[campo]):", nota[campo]);

// Acceso a propiedad inexistente (retorna undefined)
console.log("Propiedad inexistente (nota.author):", nota.author);

// Optional chaining (?.): evita que lance error si la propiedad padre no existe
console.log("Optional chaining (nota.author?.name):", nota.author?.name);


// --- 2. Desestructuración (Destructuring) ---
console.log("\n--- 2. Desestructuración (Destructuring) ---");

const nota2 = {
    id: 1,
    title: "Mi primera nota",
    content: "Contenido de la nota",
    createdAt: Date.now()
};

// Extracción tradicional propiedad por propiedad
const id = nota2.id;
const title = nota2.title;
console.log("Extracción tradicional (id, title):", id, "-", title);

// Desestructuración directa con renombramiento de variable (title -> titulo)
const { title: titulo, content } = nota2;
console.log("Desestructuración con alias (titulo, content):", titulo, "-", content);


// --- 3. Operador Spread (Copia y combinación) ---
console.log("\n--- 3. Operador Spread (Copia y combinación) ---");

const nota3 = { id: 2, title: "Hola" };
const data = { esAdmin: true };

// Copia superficial (shallow copy) usando el operador spread
const copia = { ...nota3 };
console.log("Objeto original (nota3):", nota3);
console.log("Copia independiente (copia):", copia);

// Fusión de múltiples objetos y agregado de nuevas propiedades
const notaActualizada = {
    ...nota3,
    ...data,
    edad: 18
};
console.log("Objeto fusionado y actualizado:", notaActualizada);


// --- 4. Métodos estáticos de Object ---
console.log("\n--- 4. Métodos estáticos de Object ---");

const nota4 = {
    ...nota2
    };

// Object.keys: retorna un arreglo con los nombres de las propiedades (claves)
console.log("Claves del objeto (Object.keys):", Object.keys(nota4));

// Object.values: retorna un arreglo con los valores correspondientes
console.log("Valores del objeto (Object.values):", Object.values(nota4));

// Object.entries: retorna un arreglo de pares [clave, valor]
console.log("Pares clave-valor (Object.entries):", Object.entries(nota4));