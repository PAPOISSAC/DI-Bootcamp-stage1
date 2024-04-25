import pandas as pd

# Load the dataset
file_path = r'C:\Users\kevin.issac\Desktop\DI-Bootcamp-stage1\Week18\Online Retail.csv'
data = pd.read_csv(file_path, encoding='windows-1252')  # Ensure the correct encoding is used

# Handling missing values
data = data.dropna(subset=['CustomerID'])  # Drop rows where CustomerID is NaN
data['UnitPrice'] = data['UnitPrice'].fillna(0)  # Assuming missing UnitPrice should be 0

# Correcting data types
data['InvoiceDate'] = pd.to_datetime(data['InvoiceDate'],format='%d/%m/%Y %H:%M', errors='coerce')
data['CustomerID'] = data['CustomerID'].astype(int).astype(str)  # Converting to integer then string

# Removing duplicates
data = data.drop_duplicates()

# Handling negative values in 'Quantity'
data = data[data['Quantity'] > 0]  # Removing negative quantities

# Cleaning text and categories in 'Description'
data['Description'] = data['Description'].str.strip().str.upper()

# Saving the cleaned data
cleaned_file_path = r'C:\Users\kevin.issac\Desktop\DI-Bootcamp-stage1\Week18\Cleaned_Online_Retail.csv'
data.to_csv(cleaned_file_path, index=False)

print("Data cleaning completed and saved to:", cleaned_file_path)



