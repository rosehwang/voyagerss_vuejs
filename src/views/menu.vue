<template>
    <div class="wrapper">
      <!-- Sidebar  -->
      <nav id="sidebar" v-bind:class="{'active' : toggleClass}">
        <div class="sidebar-header" v-on:click="toggle">
          <h3>어디에 투자할까?</h3>
        </div>

        <ul class="list-unstyled components">
          <li>
            <a href="/" id="main-toggle" class="sidebar-toggle">Company Code</a>
          </li>
          <li class="active">
            <a
              id="menuGen---"
              href="#menuGenList"
              data-toggle="collapse"
              aria-expanded="false"
              class="menuHeader dropdown-toggle"
            >자수{-{data.menuname}-}</a>
            <ul class="collapse list-unstyled" id="menuGenList">
              <li class="dropdown-menu__item">
                 <a href="/chart">국내{-{data.menuname}-}</a>
              </li>
              <li>
                <!-- <a href="/general/it-damage/list">전산고장신고</a> -->
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li class="active">
            <a
              id="menuSales"
              href="#menuSalesList"
              data-toggle="collapse"
              aria-expanded="false"
              class="menuHeader dropdown-toggle"
            >3</a>
            <ul class="collapse list-unstyled" id="menuSalesList">
              <li class="dropdown-menu__item">
                <!-- <a href="/sales/as-qc/list">AS 품질 확보</a> -->
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li class="active">
            <a
              id="menuMat"
              href="#menuMatList"
              data-toggle="collapse"
              aria-expanded="false"
              class="menuHeader dropdown-toggle"
            >4</a>
            <ul class="collapse list-unstyled" id="menuMatList">
              <li>
                <!-- <a href="/mat/import-plan">자재결품조회</a> -->
              </li>
              <li>
                <!-- <a href="/mat/wms/locaalm">출고 목록</a> -->
              </li>
              <li>
                <!-- <a href="/mat/wms/warehouse">재고 현황</a> -->
              </li>
            </ul>
          </li>
          <li>
            <a
              id="menuLab"
              href="#menuLabList"
              data-toggle="collapse"
              aria-expanded="false"
              class="menuHeader dropdown-toggle"
            >5</a>
            <ul class="collapse list-unstyled" id="menuLabList">
              <li>
                <!-- <a href="/qc/spc/spcmst">공정 검사 기준 설정</a> -->
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li><li>
          <a
            id="menuQc"
            href="#menuQcList"
            data-toggle="collapse"
            aria-expanded="false"
            class="menuHeader dropdown-toggle"
          >6</a>
          <ul class="collapse list-unstyled" id="menuQcList">
            <li>
              <!-- <a href="/lab/proto/locaalm">시작품 불출 현황</a> -->
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>

      <!-- Page Content  -->
      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button type="button" class="btn btn-info" v-on:click="toggle">
              <i class="fas fa-align-left"></i>
            </button>

            <button
              class="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-align-justify"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/">menu 8</a>
                </li>
                <li class="nav-item">
                  <!-- <a class="nav-link" href="#">Page</a> -->
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link" v-if="currentUser" v-on:click="logOut">Logout</a>
                  <a class="nav-link" v-if="!currentUser" href="/login" exact>Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" v-if="currentUser" href="/profile">Me</a>
                </li> -->
              </ul>
            </div>
          </div>
        </nav>

        <router-view />
      </div>
    </div>
</template>
<script src='./assets/js/bootstrap.min.js'>
</script>

<script>
  export default {
    data() {
      return {
        toggleClass: false
      };
    },
    // computed: {
    //   isAuthenticated() {
    //     return store.getters.isAuthenticated
    //   },
    //   currentUser() {
    //     return this.$store.state.account;
    //   }
    // },
    methods: {
      // onClickLogout() {
      //   // LOGOUT 변이 실행 후 리다이렉트
      //   store.dispatch('LOGOUT').then(() => this.$router.push('/'))
      // },
      toggle() {
        if (this.toggleClass === true) {
          this.toggleClass = false;
        } else {
          this.toggleClass = true;
        }
      },
      // logOut() {
      //   this.$store.commit("LOGOUT");

      //   location.href = '/login'
      //   // this.$router.push("/");
      // }
    }
  }
</script>
