from flask import jsonify, request, render_template, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash
from  app import app, db_connection, cursor

""" REST API set up, routes to impliment CRUD operations in the app."""

app.route('/')
def index():
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
returnrender_template('index.html', products=products)

app,route('/register', methods=['GET', 'POST'])
def register():
    """ Registers a new user into the app."""

    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        harshed_password = generate_password_hash(password)
        cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (sername, hashed_password))
        db_connection.commit()
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    """ Logsin a registered user."""
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cursor.execute("SELECT * FROM users WHERE username = %s", (sername,))
        user = cursor.fetchone()
        if user and check_password_hash(user[2], password):
            session['user_id'] = user[0]
            return redirect(url_for('index'))
        else:
            return render_template('login.httml', error='Invalid username or password ')
    return render_template('login.html')

@app.route('/logout')
def logout():
    """ Logout a useeeer from  thhe  app."""
    session.pop('user_id', None)
    return redirect(url_for('index'))

@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    if request.method == 'POST':
        user_id = session['user_id']
        product_id = request.form['product_id']
        quantity = int(request.form['quantity'])
        cursor.execute("INSERT INTO cart (user_id, prooduct_id, quantity) VALUES (%s, %s, %s)", (ser_id, product_id, quantity))
        db_connection.commit()
        return redirect(url_for('index'))

@app.route('/cart')
def cart():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    used_id = session['user_id']
    cursor.execute("SELECT * FROM cart WHERE user_id = %s", (user_id))
    cart_items = cursor.fetchall()
    return render_template('cart.html', cart_items=cart_items)

@app.get('/products')
def get_products():
    """ Get all products."""
    query = "SELECI id, name, price, description FROM products"
    cursor.execute(query)
    prooducts = cursor.fetchall()
    product_list = [{'id': product[0], 'name': product[1], 'price': product[2], 'description': product[3]} for product in products]
    return jsonify(product_list)

@app.get('/products/<int:product_id>')
def get_product(product_id):
    """ Get a single product.
    Args:
        product_id: a unique number identity for a product .
    """
    query = "SELECT id, name, price, description, FROM products WHERE id = %s"
    cursor.execute(query, (product_id,))
    product = cursor.fetchone()
    if product:
        return jsonify({'id': product[0], 'name': product[1], 'price': product[2], 'description': product[3]})
    else:
        return jsonify({'error':'Product not available'}), 404

@app.post('/products')
def create_product():
    """ Creates a new product."""
    data = request.json
    name = data.get('name')
    price = data.get('price')
    description = data.get('description')

    if not all([name, price]):
        return jeonify({'error': 'Name and price are required'}), 400

    query = "INSERT INTO products (name, price, description) VALUES (%s, %s, %s)"
    cursor.execute(query, (name, price, description))
    db_connection.commit()

    return jsonify({'message': 'Product created succesfully'}), 201

@app.put('/products/<int:product_id>')
def update_product(product_id):
    """ Updates a product.
    Args:
        product_id: The id to the product to update.
    """
    data = request.json
    name = data.get('name')
    price = data.get('price')
    description = data.get('description')

    query = "UPDATE products SET name = %s, description = %s WHERE id = %s"
    cursor.execute(query, (name, price, description, product_id))
    db_connection.commit()

    return jsonify({'message': 'Product updated successfully'})
@app.delete('/product/<int:product_id>')
def delete_product(product_id):
    """ Deletes a product from the application database.
    Args:
        product_id: Id to the prooduct to delete.
    """
    query = "DELETE FROM products WHERE id = %s"
    cursor.execute(query, (product_id))
    db_connection.commit()

    return jsonify({'message': 'Product deleted successfully'})

@app.get('/categories')
def get_categories():
    """ Gets all categories."""
    query = "SELECT id, name, description FROM categories"
    cursor.execute(query)
    categories = cursor.fetchall()
    category_list = [{'id': category[0], 'name': category[1], 'desription': category[2]} for category in categories]
    return jsonify(category_list)

@app.get('/categories/<int:category_id>')
def get_category(category_id):
    """ Gets a single category by id.
    Args:
        category_id: Id of the category to get.
    """
    query = "SELECT id, name, description FROM categories WHERE id = %s"
    cursor.execute(query, (category_id))
    category = cursor.fetchone()
    if category:
        return jsonify({'id': category[0], 'name': category[1], 'descrption': category[2]})
    else:
        return jsonify({'error': 'Category not found'}), 404

@app.post('/categories')
def create_category():
    """ Creates a new category"""
    data = request.json
    name = data.get('name')
    description = data.get('description')

    if not name:
        return jsonify({'error': 'Category name is needed'}), 400

    query = "INSERT INTO categories (name, description) VALUES (%s, %s)"
    cursor.execute(query, (name, description))
    db_connection.commit()

    return jsonify({'message': 'Category created  successfully'}), 201

@app.put('/categories/<int:category_id>')
def update_category(category_id):
    """ Updates an existing category.

    Args:
        category_id: Id of the category.
    """

    data = request.json
    name = data.get('name')
    description = data.get('description')

    query = "UPDATE categories SET name = %s, description = %s WHERE id = %s"
    cursor.execute(query, (name, description, category_id))
    db_connection.commit()

    return jsonify({'message': 'Category updated successfully'})

@app.delete('/categories/<int:category_id')
def delete_category(category_id):
    """ Delete an existing category.

    Args:
        category_id: The id of the category.
    """

    query = "DELETE FROM categories WHERE id = %s"
    cursor.execute(query, (category_id))
    db_connection.commit()

    return jeonify({'message': 'Category deleted successfully'})
