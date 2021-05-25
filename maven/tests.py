import uuid
import re
import random
from django.test import TestCase, RequestFactory
from maven.models import User, Books
from maven.views import createBook, createUser, deleteBook, deleteUser

#Test Models
class UserBooksTestCase(TestCase):
    def setUp(self):
        random.seed()
        User.objects.create(ID=random.randint(1,10000),username="testUser",password="sefsPassefFWG12##$")
        Books.objects.create(ISBN="159489321",title="test",author="JohnnyTest",genre="testGenre",description="testDesc",price=12.99)

    def test_id(self):
        user = User.objects.get(username="testUser")
        self.assertIsInstance(user.ID,int, "ID's must be kept as integers")

    def test_ISBN(self):
        book = Books.objects.get(ISBN="159489321")
        if (book.ISBN.isalpha() is False):
            book.ISBN = re.sub('[^0-9]','',book.ISBN)
        self.assertTrue(book.ISBN.isnumeric(), "Value contains alphabetic characters and thus does not constitue as an ISBN")

    def test_price(self):
        book = Books.objects.get(ISBN="159489321")
        self.assertGreater(book.price, 0, "Book of price 0 detected, all books must have a value greater than 0")

    def test_password(self):
        user = User.objects.get(username="testUser")
        self.assertRegex(user.password, r"^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$])[\w\d@#$]{6,30}$", "Password does not meet the criteria detailed in the regular expression")

    def test_username(self):
        user = User.objects.get(username="testUser")
        self.assertRegex(user.username, r"^[A-Za-z0-9_-]*$", "Username does not meet the criteria detailed in the regular expression")

#Test endpoints
class ViewsTestCase(TestCase):
    def setUp(self):
        self.factory = RequestFactory()

    def test_books(self):
        request = self.factory.get('/books')
        response = createBook(request)
        self.assertEqual(response.status_code, 200)

    def test_users(self):
        request = self.factory.get('/users')
        response = createUser(request)
        self.assertEqual(response.status_code, 200)

    def test_delete_books(self):
        request = self.factory.get('/deleteBook')
        response = deleteBook(request)
        self.assertEqual(response.status_code, 200)

    def test_delete_user(self):
        request = self.factory.get('/deleteUser')
        response = deleteUser(request)
        self.assertEqual(response.status_code, 200)

    def test_edit_user(self):
        request = self.factory.get('/editUser')
        response = deleteUser(request)
        self.assertEqual(response.status_code, 200)