import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import * as AOS from 'aos';


declare let gtag: Function;


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
    selector: 'app-root',
    template: `
    <app-navbar></app-navbar>
<app-nav></app-nav>
<router-outlet></router-outlet>
<app-footer></app-footer>`,
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;

    dir: string;
    public textDir;




    constructor(private renderer: Renderer2,
        private router: Router, @Inject(DOCUMENT) private document: any, private element: ElementRef, public location: Location,

    ) {
        this.dir = localStorage.getItem('dir')
        if (this.dir === 'rtl') {
            this.textDir = 'rtl'
        } else {
            this.textDir = 'ltr'
        }

        router.events.subscribe((y: NavigationEnd) => {
            if (y instanceof NavigationEnd) {
                gtag('config', 'UA-165343761-1', { 'page_path': y.url });
            }
        })


    }
    @HostListener('window:scroll', ['$event'])
    hasScrolled() {

        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        var navbar = document.getElementsByTagName('nav')[0];

        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        } else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }

        lastScrollTop = st;
    };

    ngOnInit(): void {
        this.hasScrolled();
        AOS.init();
        //   this.getdataformlocalStorage()
    
        //this will set direction of document based on dir saved on localstorage
        //and will ser a class on body element so that you can set different styles
        //based on that class .arabic or .english
        let dir = localStorage.getItem("dir");
        if (dir === 'rtl') {
            this.renderer.setProperty(this.document, 'dir', 'rtl');
            this.renderer.addClass(this.document.body, 'arabic');


        } else {
            this.renderer.setProperty(this.document, 'dir', 'ltr');
            this.renderer.addClass(this.document.body, 'english');

        }
        




    }



}
