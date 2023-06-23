<template>
  <div class="header_section background_bg">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="logo">
            <a href="index.html"><img src="./images/logo.png" /></a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="menu_text">
            <ul>
              <div class="togle_3">
                <div class="menu_main">
                  <div class="padding_left0">
                    <a href="#">Register</a>
                    <span class="padding_left0"><a href="#">Login</a></span>
                  </div>
                </div>
                <div class="shoping_bag">
                  <img src="./images/search-icon.png" />
                </div>
              </div>
              <div id="myNav" class="overlay">
                <a
                  href="javascript:void(0)"
                  class="closebtn"
                  onclick="closeNav()"
                  >&times;</a
                >
                <div class="overlay-content">
                  <a href="index.html">Home</a>
                  <a href="services.html">Services</a>
                  <a href="about.html">About</a>
                  <a href="choose.html">Choose</a>
                  <a href="team.html">Team</a>
                  <a href="contact.html">Contact Us</a>
                </div>
              </div>
              <span class="navbar-toggler-icon"></span>
              <span onclick="openNav()"
                ><img src="./images/toggle-icon.png" class="toggle_menu"
              /></span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- header section end -->
  <!-- about section start -->
  <div class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div><img src="./images/img-2.png" class="image_2" /></div>
        </div>
        <div class="col-md-6">
          <h1 class="services_taital">
            <span>About </span> <img src="./images/icon-1.png" />
            <span style="color: #1f1f1f">Cleaning</span>
          </h1>
          <p class="ipsum_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam,
          </p>
          <div class="contact_bt_1">
            <a href="#"
              >READ MORE<span class="contact_padding"
                ><img src="./images/contact-icon1.png" /></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- about section end -->
  <!-- copyright section start -->
  <div class="copyright_section">
    <div class="container">
      <p class="copyright_text">
        Copyright 2020 All Right Reserved By
        <a href="https://html.design">Free html Templates</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { singleHighlight } from '../../../utils/index'
import { HighlightOptions, setPosition } from '../../../utils/types'

const name = ref('Knife')
const email = ref('ychag@example.com')
const password = ref('khnfie')

const handleClick = () => {
  let highlightOptions: HighlightOptions = {
    title: 'Click to button',
    description: 'Click to button to viewer',
    position: setPosition('bottom'),
  }
  singleHighlight('email', highlightOptions)
}

const resetForm = () => {
  name.value = ''
  email.value = ''
  password.value = ''
}
</script>
