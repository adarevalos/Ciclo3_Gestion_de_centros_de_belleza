<template>
<div id="app">

  <NavBar/>
  <top-banner v-bind:idCarousel="['carousel1']" ></top-banner>

<main>
        <div class="section-header">
          <h2 id="titulo-servicios">Cónoce Nuestros Servicios</h2>
        </div>
        <section id="services" class="services-section">

            <!-- inicio sección de servicios -->
            <div id="servicios" class="services-section">
                <article class="services-info">
                    <img class="services-info__imagen" src="..\assets\icon-11.png" alt="">
                    <h2 class="services-info__title">CÁTALOGO DE PRODUCTOS</h2>
                    <router-link to="/productos">VER MÁS</router-link>
                    <p class="services-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>
                <article class="services-info">
                    <img class="services-info__imagen" src="..\assets\icon-12.png" alt="">
                    <h2 class="services-info__title">ADMINISTRAR PRODUCTOS</h2>
                    <router-link to="/crearproducto">VER MÁS</router-link>
                    <p class="services-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>
                <article class="services-info">
                    <img class="services-info__imagen" src="..\assets\icon-13.png" alt="">
                    <h2 class="services-info__title">ADMINISTRAR EMPLEADOS</h2>
                    <router-link to="/crearempleado">VER MÁS</router-link>
                    <p class="services-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>
            </div>
        </section>
        <!-- fin sección de servicios -->
      
        <div class="section-header">
          <h2 id="titulo-servicios">NOTICIAS</h2>
        </div>
        <section id="news" class="news-section">
            <!--<h2>Noticias</h2>-->
            <!-- inicio sección de noticias -->
            <div id="noticias" class="seccion-noticias">
                <article class="news-info">
                    <div class="news-header">
                        <img class="news-info__imagen" src="../assets/about2.jpg" alt="" width="50%">
                        <h2 class="news-info__title">Creando Nuevos Estilos</h2>
                    </div>
                    <p class="news-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>

                <article class="news-info">
                    <div class="news-header">
                        <img class="news-info__imagen" src="../assets/about1.jpg" alt="" width="50%">
                        <h2 class="news-info__title">Tratamiento en Barba</h2>
                    </div>
                    <p class="news-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>

                <article class="news-info">
                    <div class="news-header">
                        <img class="news-info__imagen" src="../assets/about3.jpg" alt="" width="50%">
                        <h2 class="news-info__title">Redefiniendo Horizontes</h2>
                    </div>
                    <p class="news-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>

                <article class="news-info">
                    <div class="news-header">
                        <img class="news-info__imagen" src="../assets/blog-2.jpg" alt="" width="50%">
                        <h2 class="news-info__title">Nuevas Alianzas</h2>
                    </div>
                    <p class="news-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>

            </div>
        </section>
        <!-- fin sección de noticias -->

        <div class="section-header">
          <h2 id="titulo-servicios">EQUIPO</h2>
        </div>
        <section id="team" class="team-section">
            <!-- inicio sección de equipo -->
            <section id="team" class="seccion-equipo">

                <article class="team-info" >
                    <img class="team-info__imagen" src="../assets/team-2.jpg" alt="" width="40%">
                    <h2 class="team-info__title">David Arévalo</h2>
                    <p class="team-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>
                <article class="team-info" >
                    <img class="team-info__imagen" src="../assets/team-2.jpg" alt="" width="40%">
                    <h2 class="team-info__title">Docente: Joshua Triana</h2>
                    <p class="team-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>
                <article class="team-info" >
                    <img class="team-info__imagen" src="../assets/team-2.jpg" alt="" width="40%">
                    <h2 class="team-info__title">Tutor: Carlos Montes</h2>
                    <p class="team-info__text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas voluptate magni repellat eligendi! Inventore voluptas
                        voluptates quia voluptatum expedita, ducimus delectus dolore eaque maiores iusto modi eum aut corporis?
                    </p>
                </article>
            </section>
        </section>

        <!-- fin sección de equipo -->
    </main>


   <!-- Footer Start -->
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="footer-contact">
                                    <h2>NUESTRA SEDE PRINCIPAL</h2>
                                    <p><i class="fa fa-map-marker-alt"></i>Calle 82 # 11 - 25, Bogotá, Colombia</p>
                                    <p><i class="fa fa-phone-alt"></i>+57 321 3937864</p>
                                    <p><i class="fa fa-envelope"></i>adarevalos@gmail.com</p>
                                    <div class="footer-social">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-youtube"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="footer-link">
                                    <h2>Acceso Rápido</h2>
                                    <a href="">Términos de Uso</a>
                                    <a href="">Políticas de Privacidad</a>
                                    <a href="">Cookies</a>
                                    <a href="">Ayuda</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="footer-newsletter">
                            <h2>Newsletter</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
                            </p>
                            <div class="form">
                                <input class="form-control" placeholder="email para recibir noticias">
                                <button class="btn">Inscribirse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container copyright">
                <div class="row">
                    <div class="col-md-6">
                        <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TopBanner from '@/components/TopBanner.vue';

export default {
  name: "Principal",
  components: {
    NavBar,
    TopBanner,
  },
  data(){
    return {
      title: "Vivo dentro de VUE",
      carousel1 : 'carousel1',
      // Esta es la definición del objeto team, el objeto contiene la info de cada miembro del equipo
      // Se esta enviando correctamente en el ciclo v-for pero las pruebas fallan
      // Al parecer tenemos un problema con la definición de los nombres de los atributos
      team: [
        {
          codigo: 1,
          nombre: "Integrante 1",
          descripcion:
            "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis, laudantium tempore, provident corporis iure ex libero repellendus accusamus accusantium at voluptate excepturi voluptatem quis, illo modi exercitationem error consequatur.",
          rol: "Desarrollador backend",
          imagen: "https://placeimg.com/192/192/people",
        },
        {
          codigo: 2,
          nombre: "Integrante 2",
          descripcion:
            "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis, laudantium tempore, provident corporis iure ex libero repellendus accusamus accusantium at voluptate excepturi voluptatem quis, illo modi exercitationem error consequatur.",
          rol: "Desarrollador backend",
          imagen: "https://placeimg.com/192/192/nature",
        },
        {
          codigo: 3,
          nombre: "Integrante 3",
          descripcion:
            "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis, laudantium tempore, provident corporis iure ex libero repellendus accusamus accusantium at voluptate excepturi voluptatem quis, illo modi exercitationem error consequatur.",
          rol: "Desarrollador backend",
          imagen: "https://placeimg.com/192/192/architecture",
        },
        {
          codigo: 4,
          nombre: "Integrante 4",
          descripcion:
            "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis, laudantium tempore, provident corporis iure ex libero repellendus accusamus accusantium at voluptate excepturi voluptatem quis, illo modi exercitationem error consequatur.",
          rol: "Desarrollador backend",
          imagen: "https://placeimg.com/192/192/animals",
        },
        {
          codigo: 5,
          nombre: "Integrante 5",
          descripcion:
            "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis, laudantium tempore, provident corporis iure ex libero repellendus accusamus accusantium at voluptate excepturi voluptatem quis, illo modi exercitationem error consequatur.",
          rol: "Desarrollador backend",
          imagen: "https://placeimg.com/192/192/any",
        },
      ],
    };
  },
};
</script>

<style scoped>
    * {
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            max-width: 1400px;
            min-width: 375px;
            margin-right: auto;
            margin-left: auto;
            margin-top: 0;
            margin-bottom: 0;
            color: #222222;
        }

        .header-section {
            margin-bottom: 100px;
        }

        .header-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            text-align: center;

        }

        .site-title {
            width: 30%;
        }

        .site-nav {
            width: 40%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .site-nav>a {
            color: inherit;
            text-decoration: none;
        }

        .site-nav>a:hover {
            text-decoration: underline;
            font-weight: bold;
        }

        .logo-container {
            width: 30%;
        }

        .logo-container__site-logo {
            height: 80px;
        }

        .banner {
            width: 100%;
        }

        .banner>img {
            width: 100%;
            height: 400px;
            max-width: 1400px;
            object-fit: cover;
        }

        .services-section,
        .seccion-noticias,
        .seccion-equipo {
            display: flex;
            margin-bottom: 100px;
        }

        .seccion-noticias,
        .header-container{
            background-color: #f7f7f7

        }

        .seccion-noticias {
            flex-wrap: wrap;
        }

        .services-info {
            padding: 20px;
            text-align: center;
        }

        .news-info {
            width: 50%;
            padding: 20px;
        }

        .news-header {
            display: flex;
            justify-content: space-around;
        }

        .news-info__title {
            align-self: center;
        }

        .seccion-pie {
            background-color: #25294f;
            height: 200px;
            display: flex;
            color: white;
            justify-content: space-evenly;
        }

        .services-info__imagen {
            border-radius: 10%;
            margin-right: auto;
            margin-left: auto;
            width: 40%;
        }

        .team-info{
            width: 25%;
            padding: 15px;
        }

        .team-info__imagen{
            display: block;
            margin-right: auto;
            margin-left: auto;
        }

        
/*******************************/
/******* Section Header ********/
/*******************************/
.section-header {
    position: relative;
    text-align: center;
    margin-bottom: 45px;
    color: rgb(19, 110, 122);
}

.section-header p {
    margin-bottom: 5px;
    position: relative;
    text-align: center;
    font-size: 16px;
}

.section-header h2 {
    margin: 0 0 0 40px;
    position: relative;
    align-content: center;
    text-align: center;
    font-size: 50px;
    font-weight: 200;
}

.section-header h2::after {
    content: "";
    position: absolute;
    width: 200px;
    text-align: center;
    align-content: center;
    height: 0;
    top: 23px;
    left: -40px;
    border-bottom: 30px solid;
    border-image: repeating-linear-gradient( 60deg, rgba(0,0,0,.05), rgba(0,0,0,.05) 1.5%, rgba(0,0,0,.1) 1.5%, rgba(0,0,0,.1) 3%) 30;
}

.section-header h2:hover::after {
    border-image: repeating-linear-gradient( 60deg, rgba(0, 0, 0, 0.644), rgba(0,0,0,.1) 1.5%, rgba(0,0,0,.05) 1.5%, rgba(0,0,0,.05) 3%) 30;
}

@media (max-width: 991.98px) {
    .section-header h2 {
        font-size: 45px;
    }
}

@media (max-width: 767.98px) {
    .section-header h2 {
        font-size: 40px;
    }
}

@media (max-width: 575.98px) {
    .section-header h2 {
        font-size: 35px;
    }
}

a {
  text-decoration: none;
  color: rgb(1, 17, 10);
}

/*******************************/
/********* Footer CSS **********/
/*******************************/
.footer {
    position: relative;
    margin-top: 45px;
    padding-top: 90px;
    background: #092a49;
}

.footer .footer-contact,
.footer .footer-link,
.footer .footer-newsletter {
    position: relative;
    margin-bottom: 45px;
    color: #ffffff;
}

.footer .footer-contact h2,
.footer .footer-link h2,
.footer .footer-newsletter h2 {
    position: relative;
    margin-bottom: 30px;
    padding-bottom: 10px;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 1px;
    color: #ffffff;
}

.footer .footer-contact h2::after,
.footer .footer-link h2::after,
.footer .footer-newsletter h2::after {
    position: absolute;
    content: "";
    width: 45px;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #0796fe;
}

.footer .footer-link a {
    display: block;
    margin-bottom: 10px;
    color: #ffffff;
    transition: .3s;
}

.footer .footer-link a::before {
    position: relative;
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 10px;
}

.footer .footer-link a:hover {
    color: #0796fe;
    letter-spacing: 1px;
}

.footer .footer-contact p i {
    width: 25px;
}

.footer .footer-social {
    position: relative;
    margin-top: 20px;
}

.footer .footer-social a {
    display: inline-block;
}

.footer .footer-social a i {
    margin-right: 15px;
    font-size: 18px;
    color: #092a49;
}

.footer .footer-social a:last-child i {
    margin: 0;
}

.footer .footer-social a:hover i {
    color: #999999;
}

.footer .footer-newsletter .form {
    position: relative;
    width: 100%;
}

.footer .footer-newsletter input {
    height: 60px;
    border: 2px solid #1d2434;
    border-radius: 0;
}

.footer .footer-newsletter .btn {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 44px;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 600;
    color: #092a49;
    background: none;
    border-radius: 0;
    border: 2px solid #092a49;
    transition: .3s;
}

.footer .footer-newsletter .btn:hover {
    color: #0796fe;
    background: #092a49;
}

.footer .copyright {
    padding: 0 30px;
}

.footer .copyright .row {
    padding-top: 25px;
    padding-bottom: 25px;
    border-top: 1px solid rgba(256, 256, 256, .1);
}

.footer .copyright p {
    margin: 0;
    color: #999999;
}

.footer .copyright .col-md-6:last-child p {
    text-align: right;
}

.footer .copyright p a {
    color: #ffffff;
}

.footer .copyright p a:hover {
    color: #0796fe;
}

@media (max-width: 767.98px) {
    .footer .copyright p,
    .footer .copyright .col-md-6:last-child p {
        margin: 5px 0;
        text-align: center;
    }
}
</style>