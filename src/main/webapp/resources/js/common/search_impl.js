google.maps._gjsload_('search_impl', function(_) {
    var H$ = function(a) {
        _.D(this, a, 4)
    }, Pia = function(a) {
        var b = _.Zh;
        I$ || (I$ = {
            ka: "sssM",
            ta: ["ss"]
        });
        return b.i(a.V, I$)
    }, Qia = function(a, b) {
        a.V[0] = b
    }, Ria = function(a, b) {
        a.V[2] = b
    }, J$ = function(a) {
        _.D(this, a, 3)
    }, K$ = function() {
        var a = _.Oj
          , b = _.Qi;
        this.i = _.H;
        this.j = _.jm(_.oq, a, _.ju + "/maps/api/js/LayersService.GetFeature", b)
    }, Uia = function(a, b, c) {
        var d = _.KE(new K$);
        c.mi = (0,
        _.y)(d.load, d);
        c.clickable = 0 != a.get("clickable");
        _.UV(c, _.tW(b));
        var e = [];
        e.push(_.L.addListener(c, "click", (0,
        _.y)(Sia, null, a)));
        _.B(["mouseover", "mouseout", "mousemove"], function(f) {
            e.push(_.L.addListener(c, f, (0,
            _.y)(Tia, null, a, f)))
        });
        e.push(_.L.addListener(a, "clickable_changed", function() {
            a.i.clickable = 0 != a.get("clickable")
        }));
        a.j = e
    }, Sia = function(a, b, c, d, e) {
        var f = null;
        if (e && (f = {
            status: e.getStatus()
        },
        0 == e.getStatus())) {
            f.location = _.Em(e, 1) ? new _.I(_.Dc(e.getLocation(), 0),_.Dc(e.getLocation(), 1)) : null;
            f.fields = {};
            for (var g = 0, h = _.Lc(e, 2); g < h; ++g) {
                var k = new _.HW(_.Kc(e, 2, g));
                f.fields[k.getKey()] = k.Fb()
            }
        }
        _.L.trigger(a, "click", b, c, d, f)
    }, Tia = function(a, b, c, d, e, f, g) {
        var h = null;
        f && (h = {
            title: f[1].title,
            snippet: f[1].snippet
        });
        _.L.trigger(a, b, c, d, e, h, g)
    }, L$ = _.n(), I$;
    _.A(H$, _.C);
    H$.prototype.getParameter = function(a) {
        return new _.HW(_.Kc(this, 3, a))
    }
    ;
    _.A(J$, _.C);
    J$.prototype.getStatus = function() {
        return _.Cc(this, 0, -1)
    }
    ;
    J$.prototype.getLocation = function() {
        return new _.Cn(this.V[1])
    }
    ;
    K$.prototype.load = function(a, b) {
        function c(g) {
            g = new J$(g);
            b(g)
        }
        var d = new H$;
        Qia(d, a.layerId.split("|")[0]);
        d.V[1] = a.i;
        Ria(d, _.Sd(_.Td(this.i)));
        for (var e in a.parameters) {
            var f = new _.HW(_.Jc(d, 3));
            f.V[0] = e;
            f.V[1] = a.parameters[e]
        }
        a = Pia(d);
        this.j(a, c, c);
        return a
    }
    ;
    K$.prototype.cancel = function() {
        throw Error("Not implemented");
    }
    ;
    L$.prototype.nk = function(a) {
        if (_.Ah[15]) {
            var b = a.H
              , c = a.H = a.getMap();
            b && a.i && (a.o ? (b = b._gm.j,
            b.set(b.get().Gc(a.i))) : a.i && _.uW(a.i, b) && (_.B(a.j || [], _.L.removeListener),
            a.j = null));
            if (c) {
                var d = a.get("layerId")
                  , e = a.get("spotlightDescription")
                  , f = a.get("paintExperimentIds")
                  , g = a.get("styler")
                  , h = a.get("mapsApiLayer");
                b = new _.ut;
                d = d.split("|");
                b.layerId = d[0];
                for (var k = 1; k < d.length; ++k) {
                    var l = d[k].split(":");
                    b.parameters[l[0]] = l[1]
                }
                e && (b.spotlightDescription = new _.Hr(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.An(g));
                h && (b.mapsApiLayer = new _.ur(h));
                a.i = b;
                a.o = a.get("renderOnBaseMap");
                a.o ? (a = c._gm.j,
                a.set(_.Ym(a.get(), b))) : Uia(a, c, b);
                _.Dj(c, "Lg")
            }
        }
    }
    ;
    _.ef("search_impl", new L$);
});
