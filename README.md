# BigData
proyecto para Ev. BigData BIY7131

# 🛸 Proyecto Big Data - Avistamientos OVNI  

## 📌 Introducción  
Este proyecto tiene como objetivo analizar avistamientos de OVNIs utilizando herramientas de **BigQuery, Cloud Storage y DataPrep** para estructurar los datos y obtener visualizaciones claras con **Looker Studio**.

## 📂 Procesamiento de Datos  
1. Se cargó el archivo `avistamientos.csv` en **Cloud Storage** dentro del bucket `nombre-alumno`.  
2. Se creó un dataset en **BigQuery** llamado `ovni`.  
3. Se utilizó **DataPrep** para limpiar y procesar los datos (verificación de nulos, corrección de datos incorrectos).  
4. Se almacenaron los datos procesados en la tabla `avistamientos` dentro del dataset `ovni`.

## 🔍 Consultas SQL y Gráficos  
A continuación, se presentan los principales análisis realizados:

### 📊 Avistamientos por Forma de Objeto  
Consulta SQL:
```sql
SELECT forma_objeto, COUNT(*) AS cantidad
FROM avistamientos
GROUP BY forma_objeto
ORDER BY cantidad DESC
LIMIT 5;

SELECT YEAR(fecha_avistamiento) AS año, COUNT(*) AS cantidad
FROM avistamientos
GROUP BY año
ORDER BY cantidad DESC;


SELECT estado, COUNT(*) AS cantidad
FROM avistamientos
GROUP BY estado
ORDER BY cantidad DESC;
