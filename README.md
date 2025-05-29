# BigData Evaluación 2 

## 📌 Sitio del Proyecto  
🔗 [BigData GitHub Page](https://ryuzakiii-cl.github.io/BigData/)  

## 🛸 Proyecto Big Data - Avistamientos OVNI  


**Integrantes:** 

-Christopher Lhoest 

-Antonia Sánchez

**Sección:** BIY7131-001D

**Fecha:** 30/05/2025

## 📝 Introducción  
Este proyecto tiene como objetivo analizar avistamientos de OVNIs utilizando herramientas de **BigQuery, Cloud Storage y DataPrep** para estructurar los datos y obtener visualizaciones claras con **Looker Studio**.

## 📂 Procesamiento de Datos  
1. Se inicia el laboratorio GSP823 - `Preparing and Aggregating Data For Visualizations Using Cloud Dataprep`
2. Se creo el  bucket `antonia-sancehzr` y se cargó el archivo `avistamientos.csv` en **Cloud Storage** dentro de el.  
3. Se creó un dataset en **BigQuery** llamado `ovni`.  
4. Se utilizó **DataPrep** para limpiar y procesar los datos (verificación de nulos, corrección de datos incorrectos).  
5. Se almacenaron los datos procesados en la tabla `avistamientos` dentro del dataset `ovni`.
6. Se realizan las consultan en BigQuery.
7. Se diseñan los graficos a traves de Looker Studio.

## 🔍 Consultas SQL en BigQuery y Gráficos en Looker Studio.

A continuación, se presentan los principales análisis realizados:

1.- Avistamientos Del TOP 5 De Forma De Objetos Con Mas Avistamientos  
2.- Cantidad De Avistamientos Por Año  
3.- Cantidad de Avistamientos por estado dentros de EE.UU.  

Consulta SQL:

## 📊 1.- Avistamientos Del TOP 5 De Forma De Objetos Con Mas Avistamientos  

```sql
SELECT 
  UFO_shape,
  COUNT(*) AS Sightings
FROM 
  'qwiklabs-gco-01-b1b69d020085.ovni.avistamientos'
WHERE 
  country = 'us'
GROUP BY 
  UFO_shape
ORDER BY 
  Sightings DESC
LIMIT 5;
```

## 📈 Avistamientos por Año

```sql
SELECT 
  EXTRACT(YEAR FROM DATETIME(Date_time)) AS Year,
  COUNT(*) AS Sightings
FROM 
  'qwiklabs-gco-01-b1b69d020085.ovni.avistamientos'
WHERE 
  country = 'us'
GROUP BY 
  Year
ORDER BY 
  Sightings DESC;
```

## 🗺️ Avistamientos por Estado en EE.UU.

```sql
SELECT 
  `state/province` AS State,
  COUNT(*) AS Sightings
FROM 
  `qwiklabs-gcp-01-b1b69d020085.ovni.avistamientos`
WHERE 
  country = 'us'
GROUP BY 
  State
ORDER BY 
  Sightings DESC;
  
```

## 🏁 Conclusión

El análisis de avistamientos de OVNIs ha permitido identificar patrones clave, como las formas de objetos más reportadas, la variación de avistamientos a lo largo del tiempo y su distribución geográfica en EE.UU.

A través de BigQuery y Looker Studio, logramos visualizar tendencias significativas, como la predominancia de ciertas formas de avistamientos y su concentración en determinados estados. La limpieza y preparación de datos con DataPrep fue esencial para garantizar la calidad de la información utilizada.
