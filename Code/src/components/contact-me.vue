<template>
  <!-- contact
   ================================================== -->
  <section id="contact">
    <div class="row section-intro">
      <div class="col-twelve">
        <h5>Contact</h5>
        <h1>I'd Love To Hear From You.</h1>

        <p class="lead">
          You can fill out this form to get in touch with me and reach out. I am
          eagerly looking forward to collaborating with you!
        </p>
      </div>
    </div>
    <!-- /section-intro -->

    <div class="row contact-form">
      <div class="col-twelve">
        <!-- form -->
        <form id="contact-form">
          <fieldset>
            <div class="form-field">
              <input
                v-model="emailData.name"
                name="contactName"
                type="text"
                id="contactName"
                placeholder="Name"
                minlength="2"
                required
              />
            </div>
            <div class="form-field">
              <input
                v-model="emailData.email"
                name="contactEmail"
                type="email"
                id="contactEmail"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-field">
              <input
                v-model="emailData.subject"
                name="contactSubject"
                type="text"
                id="contactSubject"
                placeholder="Subject"
              />
            </div>
            <div class="form-field">
              <textarea
                v-model="emailData.bodyText"
                name="contactMessage"
                id="contactMessage"
                placeholder="Message"
                rows="10"
                cols="50"
                required
              ></textarea>
            </div>
            <div class="form-field">
              <button @click.prevent="submitForm()" class="submitform">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <!-- Form End -->
      </div>
      <!-- /col-twelve -->
    </div>
    <!-- /contact-form -->

    <div class="row contact-info">
      <div class="icon">
        <i class="icon-mail"></i>
      </div>

      <h5>Email Me At</h5>

      <p>berke.gokner@gmail.com</p>

      <div class="icon">
        <i class="icon-phone"></i>
      </div>

      <h5>Call Me At</h5>

      <p>Phone: +90 (530) 283 26 01</p>
    </div>

    <footer id="footer">
      <div class="row">
        <div class="col-center tab-full pull-right social">
          <ul class="footer-social">
            <li>
              <a href="https://tr-tr.facebook.com/berke.gokner" target="_blank"
                ><i class="fa-brands fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/berkegokner/" target="_blank"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><i class="fa-brands fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
          </ul>
          <div class="copyright">
            <span>© Copyright 2023 </span>
            <span
              >Design by
              <a href="http://www.berkegokner.com/">Berke Gokner</a></span
            >
          </div>
        </div>
      </div>
      <!-- /row -->
    </footer>
    <!-- /contact-info -->
  </section>
  <!-- /contact -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      emailData: {
        name: "",
        email: "",
        subject: "",
        bodyText: "",
      },
      showLoader: false,
    };
  },
  methods: {
    submitForm() {
      if (!this.isEmailValid(this.emailData.email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (
        this.emailData.name.trim() === "" ||
        this.emailData.email.trim() === "" ||
        this.emailData.bodyText.trim() === ""
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      this.SendEmail();
    },
    isEmailValid(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    SendEmail() {
      axios
        .post(
          "https://tsmmztez3a.execute-api.us-east-1.amazonaws.com/prod/sendemail",
          this.emailData
        )
        .then((response) => {
          console.log(response);
          alert(
            "You're welcome! Your message has been sent successfully. I will get back to you as soon as possible."
          );
          document.getElementById("contact-form").reset();
        })
        .catch((err) => {
          console.log(err);
          alert("Email Failed");
          document.getElementById("contact-form").reset();
        });
    },
  },
};
</script>

<style scoped>
.contact-info p {
  color: whitesmoke;
}
</style>
