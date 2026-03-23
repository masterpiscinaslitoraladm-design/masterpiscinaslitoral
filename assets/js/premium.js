(function () {
	var whatsappUrl = "https://wa.me/5513981121258";

	// Remove all forms from DOM and replace budget form area with WhatsApp CTA.
	document.querySelectorAll("form, .jetpack-contact-form-container, .wp-block-jetpack-contact-form").forEach(function (node) {
		if (node && node.parentNode) {
			node.parentNode.removeChild(node);
		}
	});

	// Remove section "Um pouco do nosso trabalho" from home when present.
	var workHeading = Array.from(document.querySelectorAll("p, h2, h3")).find(function (el) {
		return /um pouco do nosso trabalho/i.test((el.textContent || "").trim());
	});

	if (workHeading) {
		var workSection = workHeading.closest(".wp-block-group.is-layout-flow");
		if (workSection && workSection.querySelector(".wp-block-jetpack-slideshow")) {
			var previous = workSection.previousElementSibling;
			var next = workSection.nextElementSibling;
			workSection.remove();
			if (previous && previous.matches("hr.wp-block-separator")) {
				previous.remove();
			}
			if (next && next.matches("hr.wp-block-separator")) {
				next.remove();
			}
		}
	}

	var budgetHeadings = Array.from(document.querySelectorAll("h1, h2, h3, p")).filter(function (el) {
		return /solicite aqui seu orcamento/i.test(el.textContent || "");
	});

	budgetHeadings.forEach(function (heading) {
		var parent = heading.parentElement;
		if (!parent || parent.querySelector(".premium-whatsapp-cta")) {
			return;
		}
		var cta = document.createElement("div");
		cta.className = "premium-whatsapp-cta premium-reveal";
		cta.innerHTML = "<p>Atendimento direto e rapido no WhatsApp para orcamento.</p><a class=\"wp-block-button__link wp-element-button\" href=\"" + whatsappUrl + "\" target=\"_blank\" rel=\"noopener noreferrer\">Solicitar orcamento pelo WhatsApp</a>";
		parent.appendChild(cta);
	});

	// Keep contact-request links pointed to WhatsApp.
	document.querySelectorAll("a").forEach(function (link) {
		var text = (link.textContent || "").toLowerCase();
		if (/solicit|orcamento|fale|contato|atendimento|whatsapp/.test(text)) {
			link.setAttribute("href", whatsappUrl);
			link.setAttribute("target", "_blank");
			link.setAttribute("rel", "noopener noreferrer");
		}
	});

	// Premium floating WhatsApp button.
	if (!document.querySelector(".premium-whatsapp-fab")) {
		var fab = document.createElement("a");
		fab.className = "premium-whatsapp-fab";
		fab.href = whatsappUrl;
		fab.target = "_blank";
		fab.rel = "noopener noreferrer";
		fab.setAttribute("aria-label", "WhatsApp");
		fab.setAttribute("title", "WhatsApp");
		fab.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M19.11 17.44c-.28-.14-1.64-.8-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.19-.43-2.27-1.37-.84-.74-1.4-1.64-1.57-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.27-.47.09-.18.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.71.35-.25.28-.95.93-.95 2.27s.98 2.63 1.12 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.57.65.2 1.24.17 1.71.1.52-.08 1.64-.67 1.87-1.31.23-.65.23-1.2.16-1.31-.07-.12-.25-.18-.52-.32M16 5.18c-5.95 0-10.77 4.82-10.77 10.77 0 1.9.5 3.77 1.45 5.42L5 27l5.8-1.52c1.6.87 3.39 1.33 5.2 1.33h.01c5.95 0 10.78-4.83 10.78-10.78 0-2.88-1.12-5.58-3.15-7.62A10.72 10.72 0 0 0 16 5.18m0-2.18c3.26 0 6.33 1.27 8.64 3.58A12.18 12.18 0 0 1 28.22 16c0 6.74-5.48 12.22-12.22 12.22-1.95 0-3.86-.46-5.58-1.34L3 28.78l1.95-7.25A12.16 12.16 0 0 1 3.78 16C3.78 9.26 9.26 3.78 16 3.78"/></svg>';
		document.body.appendChild(fab);
	}

	// Simplify service cards visual grouping.
	var serviceGrid = document.querySelector(".wp-container-core-columns-is-layout-edb02e35");
	if (serviceGrid) {
		serviceGrid.classList.add("premium-service-grid");
	}

	Array.from(document.querySelectorAll(".wp-block-group.full-width.has-base-background-color.has-background")).forEach(function (card) {
		var hasServiceTitle = card.querySelector("p.full-width.text-nowrap.has-large-font-size");
		var hasDescription = card.querySelector("p.full-width.wp-block-paragraph");
		var hasServiceLink = card.querySelector("pre.wp-block-preformatted a");
		if (hasServiceTitle && hasDescription && hasServiceLink) {
			card.classList.add("premium-service-card");
		}
	});

	// Framer-like reveal transitions.
	var revealTargets = document.querySelectorAll(".wp-block-group, .wp-block-columns, .wp-block-media-text, .wp-block-button, .premium-whatsapp-cta");
	revealTargets.forEach(function (el, index) {
		if (index < 80) {
			el.classList.add("premium-reveal");
		}
	});

	if ("IntersectionObserver" in window) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.16, rootMargin: "0px 0px -40px 0px" });
		document.querySelectorAll(".premium-reveal").forEach(function (el) { observer.observe(el); });
	}

	// Scroll parallax on covers and large media.
	var parallaxElements = [];
	document.querySelectorAll(".wp-block-cover__image-background, .wp-block-cover__video-background, .wp-block-media-text__media img").forEach(function (el, index) {
		if (index < 14) {
			el.classList.add("premium-parallax-layer");
			parallaxElements.push(el);
		}
	});

	var ticking = false;
	var onScroll = function () {
		if (ticking) return;
		ticking = true;
		window.requestAnimationFrame(function () {
			var viewportH = window.innerHeight || 1;
			parallaxElements.forEach(function (el) {
				var rect = el.getBoundingClientRect();
				var centerOffset = (rect.top + rect.height * 0.5 - viewportH * 0.5) / viewportH;
				var shift = Math.max(-30, Math.min(30, centerOffset * -28));
				el.style.setProperty("--premium-parallax-y", shift.toFixed(2) + "px");
			});
			ticking = false;
		});
	};

	window.addEventListener("scroll", onScroll, { passive: true });
	window.addEventListener("resize", onScroll);
	onScroll();
})();
