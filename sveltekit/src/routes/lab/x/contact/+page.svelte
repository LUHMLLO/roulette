<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Contact Us</title>
    </head>
    <body>
        <header>
            <h1>Contact Us</h1>
        </header>
        <main>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required />

                <label for="message">Message:</label>
                <textarea id="message" name="message" required />

                <button type="submit">Send Message</button>
            </form>
        </main>
        <footer>
            <p>&copy; 2023 My Company. All rights reserved.</p>
        </footer>
    </body>
</html>
