(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // .svelte-kit/cloudflare-workers/node_modules/mime/Mime.js
  var require_Mime = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/Mime.js"(exports, module) {
      "use strict";
      function Mime() {
        this._types = Object.create(null);
        this._extensions = Object.create(null);
        for (let i2 = 0; i2 < arguments.length; i2++) {
          this.define(arguments[i2]);
        }
        this.define = this.define.bind(this);
        this.getType = this.getType.bind(this);
        this.getExtension = this.getExtension.bind(this);
      }
      Mime.prototype.define = function(typeMap, force) {
        for (let type in typeMap) {
          let extensions = typeMap[type].map(function(t) {
            return t.toLowerCase();
          });
          type = type.toLowerCase();
          for (let i2 = 0; i2 < extensions.length; i2++) {
            const ext = extensions[i2];
            if (ext[0] === "*") {
              continue;
            }
            if (!force && ext in this._types) {
              throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
            }
            this._types[ext] = type;
          }
          if (force || !this._extensions[type]) {
            const ext = extensions[0];
            this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
          }
        }
      };
      Mime.prototype.getType = function(path) {
        path = String(path);
        let last = path.replace(/^.*[/\\]/, "").toLowerCase();
        let ext = last.replace(/^.*\./, "").toLowerCase();
        let hasPath = last.length < path.length;
        let hasDot = ext.length < last.length - 1;
        return (hasDot || !hasPath) && this._types[ext] || null;
      };
      Mime.prototype.getExtension = function(type) {
        type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
        return type && this._extensions[type.toLowerCase()] || null;
      };
      module.exports = Mime;
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/types/standard.js
  var require_standard = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/types/standard.js"(exports, module) {
      module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["ecma", "es"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/mrb-consumer+xml": ["*xdf"], "application/mrb-publish+xml": ["*xdf"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["*xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-error+xml": ["xer"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/types/other.js
  var require_other = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/types/other.js"(exports, module) {
      module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/index.js
  var require_mime = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/index.js"(exports, module) {
      "use strict";
      var Mime = require_Mime();
      module.exports = new Mime(require_standard(), require_other());
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/types.js
  var require_types = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d2, b2) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
            d3.__proto__ = b3;
          } || function(d3, b3) {
            for (var p2 in b3)
              if (b3.hasOwnProperty(p2))
                d3[p2] = b3[p2];
          };
          return extendStatics(d2, b2);
        };
        return function(d2, b2) {
          extendStatics(d2, b2);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
        };
      }();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
      var KVError = function(_super) {
        __extends(KVError2, _super);
        function KVError2(message, status) {
          var _newTarget = this.constructor;
          if (status === void 0) {
            status = 500;
          }
          var _this = _super.call(this, message) || this;
          Object.setPrototypeOf(_this, _newTarget.prototype);
          _this.name = KVError2.name;
          _this.status = status;
          return _this;
        }
        return KVError2;
      }(Error);
      exports.KVError = KVError;
      var MethodNotAllowedError = function(_super) {
        __extends(MethodNotAllowedError2, _super);
        function MethodNotAllowedError2(message, status) {
          if (message === void 0) {
            message = "Not a valid request method";
          }
          if (status === void 0) {
            status = 405;
          }
          return _super.call(this, message, status) || this;
        }
        return MethodNotAllowedError2;
      }(KVError);
      exports.MethodNotAllowedError = MethodNotAllowedError;
      var NotFoundError2 = function(_super) {
        __extends(NotFoundError3, _super);
        function NotFoundError3(message, status) {
          if (message === void 0) {
            message = "Not Found";
          }
          if (status === void 0) {
            status = 404;
          }
          return _super.call(this, message, status) || this;
        }
        return NotFoundError3;
      }(KVError);
      exports.NotFoundError = NotFoundError2;
      var InternalError = function(_super) {
        __extends(InternalError2, _super);
        function InternalError2(message, status) {
          if (message === void 0) {
            message = "Internal Error in KV Asset Handler";
          }
          if (status === void 0) {
            status = 500;
          }
          return _super.call(this, message, status) || this;
        }
        return InternalError2;
      }(KVError);
      exports.InternalError = InternalError;
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/index.js
  var require_dist = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f2, y2, t, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n2) {
          return function(v2) {
            return step([n2, v2]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
                return t;
              if (y2 = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y2 = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y2 = 0;
            } finally {
              f2 = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
      var mime = require_mime();
      var types_1 = require_types();
      Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
        return types_1.MethodNotAllowedError;
      } });
      Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
        return types_1.NotFoundError;
      } });
      Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
        return types_1.InternalError;
      } });
      var mapRequestToAsset = function(request) {
        var parsedUrl = new URL(request.url);
        var pathname = parsedUrl.pathname;
        if (pathname.endsWith("/")) {
          pathname = pathname.concat("index.html");
        } else if (!mime.getType(pathname)) {
          pathname = pathname.concat("/index.html");
        }
        parsedUrl.pathname = pathname;
        return new Request(parsedUrl.toString(), request);
      };
      exports.mapRequestToAsset = mapRequestToAsset;
      function serveSinglePageApp(request) {
        request = mapRequestToAsset(request);
        var parsedUrl = new URL(request.url);
        if (parsedUrl.pathname.endsWith(".html")) {
          return new Request(parsedUrl.origin + "/index.html", request);
        } else {
          return request;
        }
      }
      exports.serveSinglePageApp = serveSinglePageApp;
      var defaultCacheControl = {
        browserTTL: null,
        edgeTTL: 2 * 60 * 60 * 24,
        bypassCache: false
      };
      var getAssetFromKV2 = function(event, options2) {
        return __awaiter(void 0, void 0, void 0, function() {
          var request, ASSET_NAMESPACE, ASSET_MANIFEST, SUPPORTED_METHODS, rawPathKey, pathIsEncoded, requestKey, parsedUrl, pathname, pathKey, cache, mimeType, shouldEdgeCache, cacheKey, evalCacheOpts, shouldSetBrowserCache, response, headers, shouldRevalidate, body;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                options2 = Object.assign({
                  ASSET_NAMESPACE: __STATIC_CONTENT,
                  ASSET_MANIFEST: __STATIC_CONTENT_MANIFEST,
                  mapRequestToAsset,
                  cacheControl: defaultCacheControl,
                  defaultMimeType: "text/plain"
                }, options2);
                request = event.request;
                ASSET_NAMESPACE = options2.ASSET_NAMESPACE;
                ASSET_MANIFEST = typeof options2.ASSET_MANIFEST === "string" ? JSON.parse(options2.ASSET_MANIFEST) : options2.ASSET_MANIFEST;
                if (typeof ASSET_NAMESPACE === "undefined") {
                  throw new types_1.InternalError("there is no KV namespace bound to the script");
                }
                SUPPORTED_METHODS = ["GET", "HEAD"];
                if (!SUPPORTED_METHODS.includes(request.method)) {
                  throw new types_1.MethodNotAllowedError(request.method + " is not a valid request method");
                }
                rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
                pathIsEncoded = false;
                if (ASSET_MANIFEST[rawPathKey]) {
                  requestKey = request;
                } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
                  pathIsEncoded = true;
                  requestKey = request;
                } else {
                  requestKey = options2.mapRequestToAsset(request);
                }
                parsedUrl = new URL(requestKey.url);
                pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
                pathKey = pathname.replace(/^\/+/, "");
                cache = caches.default;
                mimeType = mime.getType(pathKey) || options2.defaultMimeType;
                if (mimeType.startsWith("text")) {
                  mimeType += "; charset=utf-8";
                }
                shouldEdgeCache = false;
                if (typeof ASSET_MANIFEST !== "undefined") {
                  if (ASSET_MANIFEST[pathKey]) {
                    pathKey = ASSET_MANIFEST[pathKey];
                    shouldEdgeCache = true;
                  }
                }
                cacheKey = new Request(parsedUrl.origin + "/" + pathKey, request);
                evalCacheOpts = function() {
                  switch (typeof options2.cacheControl) {
                    case "function":
                      return options2.cacheControl(request);
                    case "object":
                      return options2.cacheControl;
                    default:
                      return defaultCacheControl;
                  }
                }();
                options2.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
                if (options2.cacheControl.bypassCache || options2.cacheControl.edgeTTL === null || request.method == "HEAD") {
                  shouldEdgeCache = false;
                }
                shouldSetBrowserCache = typeof options2.cacheControl.browserTTL === "number";
                response = null;
                if (!shouldEdgeCache)
                  return [3, 2];
                return [4, cache.match(cacheKey)];
              case 1:
                response = _a.sent();
                _a.label = 2;
              case 2:
                if (!response)
                  return [3, 3];
                headers = new Headers(response.headers);
                shouldRevalidate = false;
                shouldRevalidate = [
                  request.headers.has("range") !== true,
                  request.headers.has("if-none-match"),
                  response.headers.has("etag"),
                  request.headers.get("if-none-match") === "" + pathKey
                ].every(Boolean);
                if (shouldRevalidate) {
                  if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
                    response.body.cancel();
                    console.log("Body exists and environment supports readable streams. Body cancelled");
                  } else {
                    console.log("Environment doesnt support readable streams");
                  }
                  headers.set("cf-cache-status", "REVALIDATED");
                  response = new Response(null, {
                    status: 304,
                    headers,
                    statusText: "Not Modified"
                  });
                } else {
                  headers.set("CF-Cache-Status", "HIT");
                  response = new Response(response.body, { headers });
                }
                return [3, 5];
              case 3:
                return [4, ASSET_NAMESPACE.get(pathKey, "arrayBuffer")];
              case 4:
                body = _a.sent();
                if (body === null) {
                  throw new types_1.NotFoundError("could not find " + pathKey + " in your content namespace");
                }
                response = new Response(body);
                if (shouldEdgeCache) {
                  response.headers.set("Accept-Ranges", "bytes");
                  response.headers.set("Content-Length", body.length);
                  if (!response.headers.has("etag")) {
                    response.headers.set("etag", "" + pathKey);
                  }
                  response.headers.set("Cache-Control", "max-age=" + options2.cacheControl.edgeTTL);
                  event.waitUntil(cache.put(cacheKey, response.clone()));
                  response.headers.set("CF-Cache-Status", "MISS");
                }
                _a.label = 5;
              case 5:
                response.headers.set("Content-Type", mimeType);
                if (shouldSetBrowserCache) {
                  response.headers.set("Cache-Control", "max-age=" + options2.cacheControl.browserTTL);
                } else {
                  response.headers.delete("Cache-Control");
                }
                return [2, response];
            }
          });
        });
      };
      exports.getAssetFromKV = getAssetFromKV2;
    }
  });

  // node_modules/@fortawesome/free-solid-svg-icons/index.es.js
  var faAngleLeft = {
    prefix: "fas",
    iconName: "angle-left",
    icon: [256, 512, [], "f104", "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"]
  };
  var faExternalLinkAlt = {
    prefix: "fas",
    iconName: "external-link-alt",
    icon: [512, 512, [], "f35d", "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"]
  };
  var faHouseUser = {
    prefix: "fas",
    iconName: "house-user",
    icon: [576, 512, [], "e065", "M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"]
  };

  // node_modules/emailjs-com/es/store/store.js
  var store = {
    _origin: "https://api.emailjs.com"
  };

  // node_modules/emailjs-com/es/methods/init/init.js
  var init = (userID, origin = "https://api.emailjs.com") => {
    store._userID = userID;
    store._origin = origin;
  };

  // node_modules/emailjs-com/es/utils/validateParams.js
  var validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
      throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
    }
    if (!serviceID) {
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    }
    if (!templateID) {
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    }
    return true;
  };

  // node_modules/emailjs-com/es/models/EmailJSResponseStatus.js
  var EmailJSResponseStatus = class {
    constructor(httpResponse) {
      this.status = httpResponse.status;
      this.text = httpResponse.responseText;
    }
  };

  // node_modules/emailjs-com/es/api/sendPost.js
  var sendPost = (url, data, headers = {}) => {
    return new Promise((resolve2, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", ({ target }) => {
        const responseStatus = new EmailJSResponseStatus(target);
        if (responseStatus.status === 200 || responseStatus.text === "OK") {
          resolve2(responseStatus);
        } else {
          reject(responseStatus);
        }
      });
      xhr.addEventListener("error", ({ target }) => {
        reject(new EmailJSResponseStatus(target));
      });
      xhr.open("POST", store._origin + url, true);
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
      xhr.send(data);
    });
  };

  // node_modules/emailjs-com/es/methods/send/send.js
  var send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || store._userID;
    validateParams(uID, serviceID, templateID);
    const params = {
      lib_version: "3.2.0",
      user_id: uID,
      service_id: serviceID,
      template_id: templateID,
      template_params: templatePrams
    };
    return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
      "Content-type": "application/json"
    });
  };

  // node_modules/emailjs-com/es/methods/sendForm/sendForm.js
  var findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === "string") {
      currentForm = document.querySelector(form);
    } else {
      currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== "FORM") {
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    }
    return currentForm;
  };
  var sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || store._userID;
    const currentForm = findHTMLForm(form);
    validateParams(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append("lib_version", "3.2.0");
    formData.append("service_id", serviceID);
    formData.append("template_id", templateID);
    formData.append("user_id", uID);
    return sendPost("/api/v1.0/email/send-form", formData);
  };

  // node_modules/emailjs-com/es/index.js
  var es_default = {
    init,
    send,
    sendForm
  };

  // .svelte-kit/output/server/app.js
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var _map;
  function get_single_valued_header(headers, key) {
    const value = headers[key];
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return void 0;
      }
      if (value.length > 1) {
        throw new Error(`Multiple headers provided for ${key}. Multiple may be provided only for set-cookie`);
      }
      return value[0];
    }
    return value;
  }
  function coalesce_to_error(err) {
    return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
  }
  function lowercase_keys(obj) {
    const clone = {};
    for (const key in obj) {
      clone[key.toLowerCase()] = obj[key];
    }
    return clone;
  }
  function error(body) {
    return {
      status: 500,
      body,
      headers: {}
    };
  }
  function is_string(s2) {
    return typeof s2 === "string" || s2 instanceof String;
  }
  function is_content_type_textual(content_type) {
    if (!content_type)
      return true;
    const [type] = content_type.split(";");
    return type === "text/plain" || type === "application/json" || type === "application/x-www-form-urlencoded" || type === "multipart/form-data";
  }
  async function render_endpoint(request, route, match) {
    const mod = await route.load();
    const handler = mod[request.method.toLowerCase().replace("delete", "del")];
    if (!handler) {
      return;
    }
    const params = route.params(match);
    const response = await handler({ ...request, params });
    const preface = `Invalid response from route ${request.path}`;
    if (!response) {
      return;
    }
    if (typeof response !== "object") {
      return error(`${preface}: expected an object, got ${typeof response}`);
    }
    let { status = 200, body, headers = {} } = response;
    headers = lowercase_keys(headers);
    const type = get_single_valued_header(headers, "content-type");
    const is_type_textual = is_content_type_textual(type);
    if (!is_type_textual && !(body instanceof Uint8Array || is_string(body))) {
      return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
    }
    let normalized_body;
    if ((typeof body === "object" || typeof body === "undefined") && !(body instanceof Uint8Array) && (!type || type.startsWith("application/json"))) {
      headers = { ...headers, "content-type": "application/json; charset=utf-8" };
      normalized_body = JSON.stringify(typeof body === "undefined" ? {} : body);
    } else {
      normalized_body = body;
    }
    return { status, body: normalized_body, headers };
  }
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
  var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
  var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
  var escaped$1 = {
    "<": "\\u003C",
    ">": "\\u003E",
    "/": "\\u002F",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function devalue(value) {
    var counts = new Map();
    function walk(thing) {
      if (typeof thing === "function") {
        throw new Error("Cannot stringify a function");
      }
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (!isPrimitive(thing)) {
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
          case "Date":
          case "RegExp":
            return;
          case "Array":
            thing.forEach(walk);
            break;
          case "Set":
          case "Map":
            Array.from(thing).forEach(walk);
            break;
          default:
            var proto = Object.getPrototypeOf(thing);
            if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
              throw new Error("Cannot stringify arbitrary non-POJOs");
            }
            if (Object.getOwnPropertySymbols(thing).length > 0) {
              throw new Error("Cannot stringify POJOs with symbolic keys");
            }
            Object.keys(thing).forEach(function(key) {
              return walk(thing[key]);
            });
        }
      }
    }
    walk(value);
    var names = new Map();
    Array.from(counts).filter(function(entry) {
      return entry[1] > 1;
    }).sort(function(a2, b2) {
      return b2[1] - a2[1];
    }).forEach(function(entry, i2) {
      names.set(entry[0], getName(i2));
    });
    function stringify(thing) {
      if (names.has(thing)) {
        return names.get(thing);
      }
      if (isPrimitive(thing)) {
        return stringifyPrimitive(thing);
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          return "Object(" + stringify(thing.valueOf()) + ")";
        case "RegExp":
          return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
        case "Date":
          return "new Date(" + thing.getTime() + ")";
        case "Array":
          var members = thing.map(function(v2, i2) {
            return i2 in thing ? stringify(v2) : "";
          });
          var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
          return "[" + members.join(",") + tail + "]";
        case "Set":
        case "Map":
          return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
        default:
          var obj = "{" + Object.keys(thing).map(function(key) {
            return safeKey(key) + ":" + stringify(thing[key]);
          }).join(",") + "}";
          var proto = Object.getPrototypeOf(thing);
          if (proto === null) {
            return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
          }
          return obj;
      }
    }
    var str = stringify(value);
    if (names.size) {
      var params_1 = [];
      var statements_1 = [];
      var values_1 = [];
      names.forEach(function(name, thing) {
        params_1.push(name);
        if (isPrimitive(thing)) {
          values_1.push(stringifyPrimitive(thing));
          return;
        }
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
            values_1.push("Object(" + stringify(thing.valueOf()) + ")");
            break;
          case "RegExp":
            values_1.push(thing.toString());
            break;
          case "Date":
            values_1.push("new Date(" + thing.getTime() + ")");
            break;
          case "Array":
            values_1.push("Array(" + thing.length + ")");
            thing.forEach(function(v2, i2) {
              statements_1.push(name + "[" + i2 + "]=" + stringify(v2));
            });
            break;
          case "Set":
            values_1.push("new Set");
            statements_1.push(name + "." + Array.from(thing).map(function(v2) {
              return "add(" + stringify(v2) + ")";
            }).join("."));
            break;
          case "Map":
            values_1.push("new Map");
            statements_1.push(name + "." + Array.from(thing).map(function(_a) {
              var k2 = _a[0], v2 = _a[1];
              return "set(" + stringify(k2) + ", " + stringify(v2) + ")";
            }).join("."));
            break;
          default:
            values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
            Object.keys(thing).forEach(function(key) {
              statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
            });
        }
      });
      statements_1.push("return " + str);
      return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
    } else {
      return str;
    }
  }
  function getName(num) {
    var name = "";
    do {
      name = chars[num % chars.length] + name;
      num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
  }
  function isPrimitive(thing) {
    return Object(thing) !== thing;
  }
  function stringifyPrimitive(thing) {
    if (typeof thing === "string")
      return stringifyString(thing);
    if (thing === void 0)
      return "void 0";
    if (thing === 0 && 1 / thing < 0)
      return "-0";
    var str = String(thing);
    if (typeof thing === "number")
      return str.replace(/^(-)?0\./, "$1.");
    return str;
  }
  function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
  }
  function escapeUnsafeChar(c2) {
    return escaped$1[c2] || c2;
  }
  function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
  }
  function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
  }
  function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
  }
  function stringifyString(str) {
    var result = '"';
    for (var i2 = 0; i2 < str.length; i2 += 1) {
      var char = str.charAt(i2);
      var code = char.charCodeAt(0);
      if (char === '"') {
        result += '\\"';
      } else if (char in escaped$1) {
        result += escaped$1[char];
      } else if (code >= 55296 && code <= 57343) {
        var next = str.charCodeAt(i2 + 1);
        if (code <= 56319 && (next >= 56320 && next <= 57343)) {
          result += char + str[++i2];
        } else {
          result += "\\u" + code.toString(16).toUpperCase();
        }
      } else {
        result += char;
      }
    }
    result += '"';
    return result;
  }
  function noop$1() {
  }
  function safe_not_equal$1(a2, b2) {
    return a2 != a2 ? b2 == b2 : a2 !== b2 || (a2 && typeof a2 === "object" || typeof a2 === "function");
  }
  Promise.resolve();
  var subscriber_queue$1 = [];
  function writable$1(value, start = noop$1) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
      if (safe_not_equal$1(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue$1.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue$1.push(subscriber, value);
          }
          if (run_queue) {
            for (let i2 = 0; i2 < subscriber_queue$1.length; i2 += 2) {
              subscriber_queue$1[i2][0](subscriber_queue$1[i2 + 1]);
            }
            subscriber_queue$1.length = 0;
          }
        }
      }
    }
    function update(fn) {
      set(fn(value));
    }
    function subscribe2(run2, invalidate = noop$1) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop$1;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update, subscribe: subscribe2 };
  }
  function hash(value) {
    let hash2 = 5381;
    let i2 = value.length;
    if (typeof value === "string") {
      while (i2)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i2);
    } else {
      while (i2)
        hash2 = hash2 * 33 ^ value[--i2];
    }
    return (hash2 >>> 0).toString(36);
  }
  var s$1 = JSON.stringify;
  async function render_response({
    branch,
    options: options2,
    $session,
    page_config,
    status,
    error: error2,
    page
  }) {
    const css2 = new Set(options2.entry.css);
    const js = new Set(options2.entry.js);
    const styles = new Set();
    const serialized_data = [];
    let rendered;
    let is_private = false;
    let maxage;
    if (error2) {
      error2.stack = options2.get_stack(error2);
    }
    if (page_config.ssr) {
      branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
        if (node.css)
          node.css.forEach((url) => css2.add(url));
        if (node.js)
          node.js.forEach((url) => js.add(url));
        if (node.styles)
          node.styles.forEach((content) => styles.add(content));
        if (fetched && page_config.hydrate)
          serialized_data.push(...fetched);
        if (uses_credentials)
          is_private = true;
        maxage = loaded.maxage;
      });
      const session = writable$1($session);
      const props = {
        stores: {
          page: writable$1(null),
          navigating: writable$1(null),
          session
        },
        page,
        components: branch.map(({ node }) => node.module.default)
      };
      for (let i2 = 0; i2 < branch.length; i2 += 1) {
        props[`props_${i2}`] = await branch[i2].loaded.props;
      }
      let session_tracking_active = false;
      const unsubscribe = session.subscribe(() => {
        if (session_tracking_active)
          is_private = true;
      });
      session_tracking_active = true;
      try {
        rendered = options2.root.render(props);
      } finally {
        unsubscribe();
      }
    } else {
      rendered = { head: "", html: "", css: { code: "", map: null } };
    }
    const include_js = page_config.router || page_config.hydrate;
    if (!include_js)
      js.clear();
    const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
      ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
      ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
    ].join("\n		");
    let init22 = "";
    if (options2.amp) {
      init22 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
    } else if (include_js) {
      init22 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
        throw new Error(`Failed to serialize session data: ${error3.message}`);
      })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${(branch || []).map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page && page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page && page.path)},
						query: new URLSearchParams(${page ? s$1(page.query.toString()) : ""}),
						params: ${page && s$1(page.params)}
					}
				}` : "null"}
			});
		<\/script>`;
    }
    if (options2.service_worker) {
      init22 += `<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('${options2.service_worker}');
			}
		<\/script>`;
    }
    const head = [
      rendered.head,
      styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
      links,
      init22
    ].join("\n\n		");
    const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
      let attributes = `type="application/json" data-type="svelte-data" data-url="${url}"`;
      if (body2)
        attributes += ` data-body="${hash(body2)}"`;
      return `<script ${attributes}>${json}<\/script>`;
    }).join("\n\n	")}
		`;
    const headers = {
      "content-type": "text/html"
    };
    if (maxage) {
      headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
    }
    if (!options2.floc) {
      headers["permissions-policy"] = "interest-cohort=()";
    }
    return {
      status,
      headers,
      body: options2.template({ head, body })
    };
  }
  function try_serialize(data, fail) {
    try {
      return devalue(data);
    } catch (err) {
      if (fail)
        fail(coalesce_to_error(err));
      return null;
    }
  }
  function serialize_error(error2) {
    if (!error2)
      return null;
    let serialized = try_serialize(error2);
    if (!serialized) {
      const { name, message, stack } = error2;
      serialized = try_serialize({ ...error2, name, message, stack });
    }
    if (!serialized) {
      serialized = "{}";
    }
    return serialized;
  }
  function normalize(loaded) {
    const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
    if (loaded.error || has_error_status) {
      const status = loaded.status;
      if (!loaded.error && has_error_status) {
        return {
          status: status || 500,
          error: new Error()
        };
      }
      const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
      if (!(error2 instanceof Error)) {
        return {
          status: 500,
          error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
        };
      }
      if (!status || status < 400 || status > 599) {
        console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
        return { status: 500, error: error2 };
      }
      return { status, error: error2 };
    }
    if (loaded.redirect) {
      if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
        };
      }
      if (typeof loaded.redirect !== "string") {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be a string')
        };
      }
    }
    return loaded;
  }
  var s$2 = JSON.stringify;
  async function load_node({
    request,
    options: options2,
    state,
    route,
    page,
    node,
    $session,
    context,
    prerender_enabled,
    is_leaf,
    is_error,
    status,
    error: error2
  }) {
    const { module } = node;
    let uses_credentials = false;
    const fetched = [];
    let set_cookie_headers = [];
    let loaded;
    const page_proxy = new Proxy(page, {
      get: (target, prop, receiver) => {
        if (prop === "query" && prerender_enabled) {
          throw new Error("Cannot access query on a page with prerendering enabled");
        }
        return Reflect.get(target, prop, receiver);
      }
    });
    if (module.load) {
      const load_input = {
        page: page_proxy,
        get session() {
          uses_credentials = true;
          return $session;
        },
        fetch: async (resource, opts = {}) => {
          let url;
          if (typeof resource === "string") {
            url = resource;
          } else {
            url = resource.url;
            opts = {
              method: resource.method,
              headers: resource.headers,
              body: resource.body,
              mode: resource.mode,
              credentials: resource.credentials,
              cache: resource.cache,
              redirect: resource.redirect,
              referrer: resource.referrer,
              integrity: resource.integrity,
              ...opts
            };
          }
          const resolved = resolve(request.path, url.split("?")[0]);
          let response;
          const filename = resolved.replace(options2.paths.assets, "").slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
          if (asset) {
            response = options2.read ? new Response(options2.read(asset.file), {
              headers: asset.type ? { "content-type": asset.type } : {}
            }) : await fetch(`http://${page.host}/${asset.file}`, opts);
          } else if (resolved.startsWith("/") && !resolved.startsWith("//")) {
            const relative = resolved;
            const headers = {
              ...opts.headers
            };
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: relative,
              rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body),
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(relative, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          } else {
            if (resolved.startsWith("//")) {
              throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
            }
            if (typeof request.host !== "undefined") {
              const { hostname: fetch_hostname } = new URL(url);
              const [server_hostname] = request.host.split(":");
              if (`.${fetch_hostname}`.endsWith(`.${server_hostname}`) && opts.credentials !== "omit") {
                uses_credentials = true;
                opts.headers = {
                  ...opts.headers,
                  cookie: request.headers.cookie
                };
              }
            }
            const external_request = new Request(url, opts);
            response = await options2.hooks.externalFetch.call(null, external_request);
          }
          if (response) {
            const proxy = new Proxy(response, {
              get(response2, key, receiver) {
                async function text() {
                  const body = await response2.text();
                  const headers = {};
                  for (const [key2, value] of response2.headers) {
                    if (key2 === "set-cookie") {
                      set_cookie_headers = set_cookie_headers.concat(value);
                    } else if (key2 !== "etag") {
                      headers[key2] = value;
                    }
                  }
                  if (!opts.body || typeof opts.body === "string") {
                    fetched.push({
                      url,
                      body: opts.body,
                      json: `{"status":${response2.status},"statusText":${s$2(response2.statusText)},"headers":${s$2(headers)},"body":${escape$1(body)}}`
                    });
                  }
                  return body;
                }
                if (key === "text") {
                  return text;
                }
                if (key === "json") {
                  return async () => {
                    return JSON.parse(await text());
                  };
                }
                return Reflect.get(response2, key, response2);
              }
            });
            return proxy;
          }
          return response || new Response("Not found", {
            status: 404
          });
        },
        context: { ...context }
      };
      if (is_error) {
        load_input.status = status;
        load_input.error = error2;
      }
      loaded = await module.load.call(null, load_input);
    } else {
      loaded = {};
    }
    if (!loaded && is_leaf && !is_error)
      return;
    if (!loaded) {
      throw new Error(`${node.entry} - load must return a value except for page fall through`);
    }
    return {
      node,
      loaded: normalize(loaded),
      context: loaded.context || context,
      fetched,
      set_cookie_headers,
      uses_credentials
    };
  }
  var escaped$2 = {
    "<": "\\u003C",
    ">": "\\u003E",
    "/": "\\u002F",
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  function escape$1(str) {
    let result = '"';
    for (let i2 = 0; i2 < str.length; i2 += 1) {
      const char = str.charAt(i2);
      const code = char.charCodeAt(0);
      if (char === '"') {
        result += '\\"';
      } else if (char in escaped$2) {
        result += escaped$2[char];
      } else if (code >= 55296 && code <= 57343) {
        const next = str.charCodeAt(i2 + 1);
        if (code <= 56319 && next >= 56320 && next <= 57343) {
          result += char + str[++i2];
        } else {
          result += `\\u${code.toString(16).toUpperCase()}`;
        }
      } else {
        result += char;
      }
    }
    result += '"';
    return result;
  }
  var absolute = /^([a-z]+:)?\/?\//;
  function resolve(base2, path) {
    const base_match = absolute.exec(base2);
    const path_match = absolute.exec(path);
    if (!base_match) {
      throw new Error(`bad base path: "${base2}"`);
    }
    const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
    const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
    baseparts.pop();
    for (let i2 = 0; i2 < pathparts.length; i2 += 1) {
      const part = pathparts[i2];
      if (part === ".")
        continue;
      else if (part === "..")
        baseparts.pop();
      else
        baseparts.push(part);
    }
    const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
    return `${prefix}${baseparts.join("/")}`;
  }
  async function respond_with_error({ request, options: options2, state, $session, status, error: error2 }) {
    const default_layout = await options2.load_component(options2.manifest.layout);
    const default_error = await options2.load_component(options2.manifest.error);
    const page = {
      host: request.host,
      path: request.path,
      query: request.query,
      params: {}
    };
    const loaded = await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_layout,
      $session,
      context: {},
      prerender_enabled: is_prerender_enabled(options2, default_error, state),
      is_leaf: false,
      is_error: false
    });
    const branch = [
      loaded,
      await load_node({
        request,
        options: options2,
        state,
        route: null,
        page,
        node: default_error,
        $session,
        context: loaded ? loaded.context : {},
        prerender_enabled: is_prerender_enabled(options2, default_error, state),
        is_leaf: false,
        is_error: true,
        status,
        error: error2
      })
    ];
    try {
      return await render_response({
        options: options2,
        $session,
        page_config: {
          hydrate: options2.hydrate,
          router: options2.router,
          ssr: options2.ssr
        },
        status,
        error: error2,
        branch,
        page
      });
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options2.handle_error(error3, request);
      return {
        status: 500,
        headers: {},
        body: error3.stack
      };
    }
  }
  function is_prerender_enabled(options2, node, state) {
    return options2.prerender && (!!node.module.prerender || !!state.prerender && state.prerender.all);
  }
  async function respond$1(opts) {
    const { request, options: options2, state, $session, route } = opts;
    let nodes;
    try {
      nodes = await Promise.all(route.a.map((id) => id ? options2.load_component(id) : void 0));
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options2.handle_error(error3, request);
      return await respond_with_error({
        request,
        options: options2,
        state,
        $session,
        status: 500,
        error: error3
      });
    }
    const leaf = nodes[nodes.length - 1].module;
    let page_config = get_page_config(leaf, options2);
    if (!leaf.prerender && state.prerender && !state.prerender.all) {
      return {
        status: 204,
        headers: {},
        body: ""
      };
    }
    let branch = [];
    let status = 200;
    let error2;
    let set_cookie_headers = [];
    ssr:
      if (page_config.ssr) {
        let context = {};
        for (let i2 = 0; i2 < nodes.length; i2 += 1) {
          const node = nodes[i2];
          let loaded;
          if (node) {
            try {
              loaded = await load_node({
                ...opts,
                node,
                context,
                prerender_enabled: is_prerender_enabled(options2, node, state),
                is_leaf: i2 === nodes.length - 1,
                is_error: false
              });
              if (!loaded)
                return;
              set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
              if (loaded.loaded.redirect) {
                return with_cookies({
                  status: loaded.loaded.status,
                  headers: {
                    location: encodeURI(loaded.loaded.redirect)
                  }
                }, set_cookie_headers);
              }
              if (loaded.loaded.error) {
                ({ status, error: error2 } = loaded.loaded);
              }
            } catch (err) {
              const e = coalesce_to_error(err);
              options2.handle_error(e, request);
              status = 500;
              error2 = e;
            }
            if (loaded && !error2) {
              branch.push(loaded);
            }
            if (error2) {
              while (i2--) {
                if (route.b[i2]) {
                  const error_node = await options2.load_component(route.b[i2]);
                  let node_loaded;
                  let j2 = i2;
                  while (!(node_loaded = branch[j2])) {
                    j2 -= 1;
                  }
                  try {
                    const error_loaded = await load_node({
                      ...opts,
                      node: error_node,
                      context: node_loaded.context,
                      prerender_enabled: is_prerender_enabled(options2, error_node, state),
                      is_leaf: false,
                      is_error: true,
                      status,
                      error: error2
                    });
                    if (error_loaded.loaded.error) {
                      continue;
                    }
                    page_config = get_page_config(error_node.module, options2);
                    branch = branch.slice(0, j2 + 1).concat(error_loaded);
                    break ssr;
                  } catch (err) {
                    const e = coalesce_to_error(err);
                    options2.handle_error(e, request);
                    continue;
                  }
                }
              }
              return with_cookies(await respond_with_error({
                request,
                options: options2,
                state,
                $session,
                status,
                error: error2
              }), set_cookie_headers);
            }
          }
          if (loaded && loaded.loaded.context) {
            context = {
              ...context,
              ...loaded.loaded.context
            };
          }
        }
      }
    try {
      return with_cookies(await render_response({
        ...opts,
        page_config,
        status,
        error: error2,
        branch: branch.filter(Boolean)
      }), set_cookie_headers);
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options2.handle_error(error3, request);
      return with_cookies(await respond_with_error({
        ...opts,
        status: 500,
        error: error3
      }), set_cookie_headers);
    }
  }
  function get_page_config(leaf, options2) {
    return {
      ssr: "ssr" in leaf ? !!leaf.ssr : options2.ssr,
      router: "router" in leaf ? !!leaf.router : options2.router,
      hydrate: "hydrate" in leaf ? !!leaf.hydrate : options2.hydrate
    };
  }
  function with_cookies(response, set_cookie_headers) {
    if (set_cookie_headers.length) {
      response.headers["set-cookie"] = set_cookie_headers;
    }
    return response;
  }
  async function render_page(request, route, match, options2, state) {
    if (state.initiator === route) {
      return {
        status: 404,
        headers: {},
        body: `Not found: ${request.path}`
      };
    }
    const params = route.params(match);
    const page = {
      host: request.host,
      path: request.path,
      query: request.query,
      params
    };
    const $session = await options2.hooks.getSession(request);
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route,
      page
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  }
  function read_only_form_data() {
    const map = new Map();
    return {
      append(key, value) {
        if (map.has(key)) {
          (map.get(key) || []).push(value);
        } else {
          map.set(key, [value]);
        }
      },
      data: new ReadOnlyFormData(map)
    };
  }
  var ReadOnlyFormData = class {
    constructor(map) {
      __privateAdd(this, _map, void 0);
      __privateSet(this, _map, map);
    }
    get(key) {
      const value = __privateGet(this, _map).get(key);
      return value && value[0];
    }
    getAll(key) {
      return __privateGet(this, _map).get(key);
    }
    has(key) {
      return __privateGet(this, _map).has(key);
    }
    *[Symbol.iterator]() {
      for (const [key, value] of __privateGet(this, _map)) {
        for (let i2 = 0; i2 < value.length; i2 += 1) {
          yield [key, value[i2]];
        }
      }
    }
    *entries() {
      for (const [key, value] of __privateGet(this, _map)) {
        for (let i2 = 0; i2 < value.length; i2 += 1) {
          yield [key, value[i2]];
        }
      }
    }
    *keys() {
      for (const [key] of __privateGet(this, _map))
        yield key;
    }
    *values() {
      for (const [, value] of __privateGet(this, _map)) {
        for (let i2 = 0; i2 < value.length; i2 += 1) {
          yield value[i2];
        }
      }
    }
  };
  _map = new WeakMap();
  function parse_body(raw, headers) {
    if (!raw)
      return raw;
    const content_type = headers["content-type"];
    const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
    const text = () => new TextDecoder(headers["content-encoding"] || "utf-8").decode(raw);
    switch (type) {
      case "text/plain":
        return text();
      case "application/json":
        return JSON.parse(text());
      case "application/x-www-form-urlencoded":
        return get_urlencoded(text());
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(text(), boundary.slice("boundary=".length));
      }
      default:
        return raw;
    }
  }
  function get_urlencoded(text) {
    const { data, append } = read_only_form_data();
    text.replace(/\+/g, " ").split("&").forEach((str) => {
      const [key, value] = str.split("=");
      append(decodeURIComponent(key), decodeURIComponent(value));
    });
    return data;
  }
  function get_multipart(text, boundary) {
    const parts = text.split(`--${boundary}`);
    if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
      throw new Error("Malformed form data");
    }
    const { data, append } = read_only_form_data();
    parts.slice(1, -1).forEach((part) => {
      const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
      if (!match) {
        throw new Error("Malformed form data");
      }
      const raw_headers = match[1];
      const body = match[2].trim();
      let key;
      const headers = {};
      raw_headers.split("\r\n").forEach((str) => {
        const [raw_header, ...raw_directives] = str.split("; ");
        let [name, value] = raw_header.split(": ");
        name = name.toLowerCase();
        headers[name] = value;
        const directives = {};
        raw_directives.forEach((raw_directive) => {
          const [name2, value2] = raw_directive.split("=");
          directives[name2] = JSON.parse(value2);
        });
        if (name === "content-disposition") {
          if (value !== "form-data")
            throw new Error("Malformed form data");
          if (directives.filename) {
            throw new Error("File upload is not yet implemented");
          }
          if (directives.name) {
            key = directives.name;
          }
        }
      });
      if (!key)
        throw new Error("Malformed form data");
      append(key, body);
    });
    return data;
  }
  async function respond(incoming, options2, state = {}) {
    if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
      const has_trailing_slash = incoming.path.endsWith("/");
      if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !(incoming.path.split("/").pop() || "").includes(".")) {
        const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
        const q = incoming.query.toString();
        return {
          status: 301,
          headers: {
            location: options2.paths.base + path + (q ? `?${q}` : "")
          }
        };
      }
    }
    const headers = lowercase_keys(incoming.headers);
    const request = {
      ...incoming,
      headers,
      body: parse_body(incoming.rawBody, headers),
      params: {},
      locals: {}
    };
    try {
      return await options2.hooks.handle({
        request,
        resolve: async (request2) => {
          if (state.prerender && state.prerender.fallback) {
            return await render_response({
              options: options2,
              $session: await options2.hooks.getSession(request2),
              page_config: { ssr: false, router: true, hydrate: true },
              status: 200,
              branch: []
            });
          }
          const decoded = decodeURI(request2.path);
          for (const route of options2.manifest.routes) {
            const match = route.pattern.exec(decoded);
            if (!match)
              continue;
            const response = route.type === "endpoint" ? await render_endpoint(request2, route, match) : await render_page(request2, route, match, options2, state);
            if (response) {
              if (response.status === 200) {
                const cache_control = get_single_valued_header(response.headers, "cache-control");
                if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
                  const etag = `"${hash(response.body || "")}"`;
                  if (request2.headers["if-none-match"] === etag) {
                    return {
                      status: 304,
                      headers: {},
                      body: ""
                    };
                  }
                  response.headers["etag"] = etag;
                }
              }
              return response;
            }
          }
          const $session = await options2.hooks.getSession(request2);
          return await respond_with_error({
            request: request2,
            options: options2,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${request2.path}`)
          });
        }
      });
    } catch (err) {
      const e = coalesce_to_error(err);
      options2.handle_error(e, request);
      return {
        status: 500,
        headers: {},
        body: options2.dev ? e.stack : e.message
      };
    }
  }
  function noop() {
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a2, b2) {
    return a2 != a2 ? b2 == b2 : a2 !== b2 || (a2 && typeof a2 === "object" || typeof a2 === "function");
  }
  function subscribe(store2, ...callbacks) {
    if (store2 == null) {
      return noop;
    }
    const unsub = store2.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function null_to_empty(value) {
    return value == null ? "" : value;
  }
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
  }
  Promise.resolve();
  var escaped = {
    '"': "&quot;",
    "'": "&#39;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };
  function escape(html) {
    return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
  }
  function each(items, fn) {
    let str = "";
    for (let i2 = 0; i2 < items.length; i2 += 1) {
      str += fn(items[i2], i2);
    }
    return str;
  }
  var missing_component = {
    $$render: () => ""
  };
  function validate_component(component, name) {
    if (!component || !component.$$render) {
      if (name === "svelte:component")
        name += " this={...}";
      throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
  }
  var on_destroy;
  function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
      const parent_component = current_component;
      const $$ = {
        on_destroy,
        context: new Map(parent_component ? parent_component.$$.context : context || []),
        on_mount: [],
        before_update: [],
        after_update: [],
        callbacks: blank_object()
      };
      set_current_component({ $$ });
      const html = fn(result, props, bindings, slots);
      set_current_component(parent_component);
      return html;
    }
    return {
      render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
        on_destroy = [];
        const result = { title: "", head: "", css: new Set() };
        const html = $$render(result, props, {}, $$slots, context);
        run_all(on_destroy);
        return {
          html,
          css: {
            code: Array.from(result.css).map((css2) => css2.code).join("\n"),
            map: null
          },
          head: result.title + result.head
        };
      },
      $$render
    };
  }
  function add_attribute(name, value, boolean) {
    if (value == null || boolean && !value)
      return "";
    return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
  }
  function afterUpdate() {
  }
  var css$k = {
    code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
    map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
  };
  var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { stores } = $$props;
    let { page } = $$props;
    let { components } = $$props;
    let { props_0 = null } = $$props;
    let { props_1 = null } = $$props;
    let { props_2 = null } = $$props;
    setContext("__svelte__", stores);
    afterUpdate(stores.page.notify);
    if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
      $$bindings.stores(stores);
    if ($$props.page === void 0 && $$bindings.page && page !== void 0)
      $$bindings.page(page);
    if ($$props.components === void 0 && $$bindings.components && components !== void 0)
      $$bindings.components(components);
    if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
      $$bindings.props_0(props_0);
    if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
      $$bindings.props_1(props_1);
    if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
      $$bindings.props_2(props_2);
    $$result.css.add(css$k);
    {
      stores.page.set(page);
    }
    return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
      default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
      })}` : ``}`
    })}

${``}`;
  });
  var base = "";
  var assets = "";
  function set_paths(paths) {
    base = paths.base;
    assets = paths.assets || base;
  }
  function set_prerendering(value) {
  }
  var user_hooks = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module"
  });
  var template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <link rel="icon" href="/favicon.png" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        ' + head + '\n    </head>\n    <body>\n        <div id="svelte">' + body + "</div>\n    </body>\n</html>\n";
  var options = null;
  var default_settings = { paths: { "base": "", "assets": "" } };
  function init2(settings = default_settings) {
    set_paths(settings.paths);
    set_prerendering(settings.prerendering || false);
    const hooks = get_hooks(user_hooks);
    options = {
      amp: false,
      dev: false,
      entry: {
        file: assets + "/_app/start-76b31002.js",
        css: [assets + "/_app/assets/start-61d1577b.css", assets + "/_app/assets/vendor-ec9510ad.css"],
        js: [assets + "/_app/start-76b31002.js", assets + "/_app/chunks/vendor-25f6bc4e.js", assets + "/_app/chunks/preload-helper-ec9aa979.js", assets + "/_app/chunks/singletons-12a22614.js"]
      },
      fetched: void 0,
      floc: false,
      get_component_path: (id) => assets + "/_app/" + entry_lookup[id],
      get_stack: (error2) => String(error2),
      handle_error: (error2, request) => {
        hooks.handleError({ error: error2, request });
        error2.stack = options.get_stack(error2);
      },
      hooks,
      hydrate: true,
      initiator: void 0,
      load_component,
      manifest,
      paths: settings.paths,
      prerender: true,
      read: settings.read,
      root: Root,
      service_worker: null,
      router: true,
      ssr: true,
      target: "#svelte",
      template,
      trailing_slash: "never"
    };
  }
  var d$1 = (s2) => s2.replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  var empty = () => ({});
  var manifest = {
    assets: [{ "file": ".DS_Store", "size": 8196, "type": null }, { "file": "android-chrome-192x192.png", "size": 48542, "type": "image/png" }, { "file": "android-chrome-512x512.png", "size": 234371, "type": "image/png" }, { "file": "apple-touch-icon.png", "size": 43632, "type": "image/png" }, { "file": "coding.svg", "size": 42125, "type": "image/svg+xml" }, { "file": "contact.png", "size": 3617, "type": "image/png" }, { "file": "cv.png", "size": 5255, "type": "image/png" }, { "file": "dani.png", "size": 15154, "type": "image/png" }, { "file": "favicon-16x16.png", "size": 851, "type": "image/png" }, { "file": "favicon-32x32.png", "size": 2452, "type": "image/png" }, { "file": "favicon.ico", "size": 15406, "type": "image/vnd.microsoft.icon" }, { "file": "favicon.png", "size": 1571, "type": "image/png" }, { "file": "github.png", "size": 9406, "type": "image/png" }, { "file": "icon21.png", "size": 10896, "type": "image/png" }, { "file": "kingOfTheHill.jpg", "size": 95648, "type": "image/jpeg" }, { "file": "linkedin.png", "size": 4742, "type": "image/png" }, { "file": "lionHead.png", "size": 14123, "type": "image/png" }, { "file": "myob.png", "size": 9770, "type": "image/png" }, { "file": "projects/.DS_Store", "size": 8196, "type": null }, { "file": "projects/21/.DS_Store", "size": 6148, "type": null }, { "file": "projects/21/210.avif", "size": 28868, "type": "image/avif" }, { "file": "projects/21/210.png", "size": 46836, "type": "image/png" }, { "file": "projects/21/211.avif", "size": 5694, "type": "image/avif" }, { "file": "projects/21/211.png", "size": 12181, "type": "image/png" }, { "file": "projects/21/212.avif", "size": 10644, "type": "image/avif" }, { "file": "projects/21/212.png", "size": 20019, "type": "image/png" }, { "file": "projects/bedzme/.DS_Store", "size": 6148, "type": null }, { "file": "projects/bedzme/bedzme0.avif", "size": 4729, "type": "image/avif" }, { "file": "projects/bedzme/bedzme0.png", "size": 21823, "type": "image/png" }, { "file": "projects/bedzme/bedzme1.avif", "size": 6277, "type": "image/avif" }, { "file": "projects/bedzme/bedzme1.png", "size": 23135, "type": "image/png" }, { "file": "projects/bedzme/bedzme2.avif", "size": 4480, "type": "image/avif" }, { "file": "projects/bedzme/bedzme2.png", "size": 10704, "type": "image/png" }, { "file": "projects/salestracker/salestracker0.avif", "size": 3765, "type": "image/avif" }, { "file": "projects/salestracker/salestracker0.png", "size": 11845, "type": "image/png" }, { "file": "projects/salestracker/salestracker1.avif", "size": 17162, "type": "image/avif" }, { "file": "projects/salestracker/salestracker1.png", "size": 74155, "type": "image/png" }, { "file": "projects/salestracker/salestracker2.avif", "size": 13274, "type": "image/avif" }, { "file": "projects/salestracker/salestracker2.png", "size": 55419, "type": "image/png" }, { "file": "projects/taskr/taskr0.avif", "size": 5820, "type": "image/avif" }, { "file": "projects/taskr/taskr0.png", "size": 25922, "type": "image/png" }, { "file": "projects/taskr/taskr1.avif", "size": 16639, "type": "image/avif" }, { "file": "projects/taskr/taskr1.png", "size": 58657, "type": "image/png" }, { "file": "projects/taskr/taskr2.avif", "size": 13663, "type": "image/avif" }, { "file": "projects/taskr/taskr2.png", "size": 58638, "type": "image/png" }, { "file": "projects/thissite/.DS_Store", "size": 6148, "type": null }, { "file": "projects/thissite/thissite0.avif", "size": 32451, "type": "image/avif" }, { "file": "projects/thissite/thissite0.png", "size": 105505, "type": "image/png" }, { "file": "projects/thissite/thissite1.avif", "size": 50809, "type": "image/avif" }, { "file": "projects/thissite/thissite1.png", "size": 110245, "type": "image/png" }, { "file": "projects/thissite/thissite2.avif", "size": 9406, "type": "image/avif" }, { "file": "projects/thissite/thissite2.png", "size": 26478, "type": "image/png" }, { "file": "projects/tictactoe/tictactoe0.avif", "size": 4119, "type": "image/avif" }, { "file": "projects/tictactoe/tictactoe0.png", "size": 9260, "type": "image/png" }, { "file": "projects/tictactoe/tictactoe1.avif", "size": 3862, "type": "image/avif" }, { "file": "projects/tictactoe/tictactoe1.png", "size": 7811, "type": "image/png" }, { "file": "projects/tictactoe/tictactoe2.avif", "size": 6484, "type": "image/avif" }, { "file": "projects/tictactoe/tictactoe2.png", "size": 11626, "type": "image/png" }, { "file": "resume.pdf", "size": 74025, "type": "application/pdf" }, { "file": "site.webmanifest", "size": 263, "type": "application/manifest+json" }, { "file": "taskr.png", "size": 6871, "type": "image/png" }, { "file": "thissite.png", "size": 12306, "type": "image/png" }, { "file": "tictactoe.png", "size": 6215, "type": "image/png" }, { "file": "wave.svg", "size": 1094, "type": "image/svg+xml" }],
    layout: "src/routes/__layout.svelte",
    error: "src/routes/__error.svelte",
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: empty,
        a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
        b: ["src/routes/__error.svelte"]
      },
      {
        type: "page",
        pattern: /^\/projects\/([^/]+?)\/?$/,
        params: (m2) => ({ slug: d$1(m2[1]) }),
        a: ["src/routes/projects/__layout.reset.svelte", "src/routes/projects/[slug].svelte"],
        b: []
      },
      {
        type: "page",
        pattern: /^\/contact\/?$/,
        params: empty,
        a: ["src/routes/__layout.svelte", "src/routes/contact/index.svelte"],
        b: ["src/routes/__error.svelte"]
      },
      {
        type: "page",
        pattern: /^\/resume\/?$/,
        params: empty,
        a: ["src/routes/__layout.svelte", "src/routes/resume/index.svelte"],
        b: ["src/routes/__error.svelte"]
      }
    ]
  };
  var get_hooks = (hooks) => ({
    getSession: hooks.getSession || (() => ({})),
    handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
    handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
    externalFetch: hooks.externalFetch || fetch
  });
  var module_lookup = {
    "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
      return __layout;
    }),
    "src/routes/__error.svelte": () => Promise.resolve().then(function() {
      return __error;
    }),
    "src/routes/index.svelte": () => Promise.resolve().then(function() {
      return index$2;
    }),
    "src/routes/projects/__layout.reset.svelte": () => Promise.resolve().then(function() {
      return __layout_reset;
    }),
    "src/routes/projects/[slug].svelte": () => Promise.resolve().then(function() {
      return _slug_;
    }),
    "src/routes/contact/index.svelte": () => Promise.resolve().then(function() {
      return index$1;
    }),
    "src/routes/resume/index.svelte": () => Promise.resolve().then(function() {
      return index;
    })
  };
  var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-d7330fce.js", "css": ["assets/pages/__layout.svelte-175ea587.css", "assets/vendor-ec9510ad.css", "assets/Logo-ef7eb8cb.css"], "js": ["pages/__layout.svelte-d7330fce.js", "chunks/vendor-25f6bc4e.js", "chunks/Logo-7011980c.js", "chunks/drag-dfa31cf3.js", "chunks/singletons-12a22614.js"], "styles": [] }, "src/routes/__error.svelte": { "entry": "pages/__error.svelte-e48bd3f3.js", "css": ["assets/pages/__error.svelte-6ce823fd.css", "assets/vendor-ec9510ad.css"], "js": ["pages/__error.svelte-e48bd3f3.js", "chunks/vendor-25f6bc4e.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-afa39f4a.js", "css": ["assets/pages/index.svelte-abed5f47.css", "assets/vendor-ec9510ad.css"], "js": ["pages/index.svelte-afa39f4a.js", "chunks/vendor-25f6bc4e.js", "chunks/drag-dfa31cf3.js", "chunks/singletons-12a22614.js"], "styles": [] }, "src/routes/projects/__layout.reset.svelte": { "entry": "pages/projects/__layout.reset.svelte-2a0bd3e3.js", "css": ["assets/pages/projects/__layout.reset.svelte-46ec1fca.css", "assets/vendor-ec9510ad.css", "assets/Logo-ef7eb8cb.css"], "js": ["pages/projects/__layout.reset.svelte-2a0bd3e3.js", "chunks/preload-helper-ec9aa979.js", "chunks/vendor-25f6bc4e.js", "chunks/Logo-7011980c.js", "chunks/drag-dfa31cf3.js", "chunks/singletons-12a22614.js"], "styles": [] }, "src/routes/projects/[slug].svelte": { "entry": "pages/projects/[slug].svelte-6e8b983d.js", "css": ["assets/vendor-ec9510ad.css"], "js": ["pages/projects/[slug].svelte-6e8b983d.js", "chunks/vendor-25f6bc4e.js"], "styles": [] }, "src/routes/contact/index.svelte": { "entry": "pages/contact/index.svelte-5b093572.js", "css": ["assets/pages/contact/index.svelte-77b0478b.css", "assets/vendor-ec9510ad.css"], "js": ["pages/contact/index.svelte-5b093572.js", "chunks/vendor-25f6bc4e.js"], "styles": [] }, "src/routes/resume/index.svelte": { "entry": "pages/resume/index.svelte-f6a21158.js", "css": ["assets/pages/resume/index.svelte-b4ce9365.css", "assets/vendor-ec9510ad.css"], "js": ["pages/resume/index.svelte-f6a21158.js", "chunks/vendor-25f6bc4e.js"], "styles": [] } };
  async function load_component(file) {
    const { entry, css: css2, js, styles } = metadata_lookup[file];
    return {
      module: await module_lookup[file](),
      entry: assets + "/_app/" + entry,
      css: css2.map((dep) => assets + "/_app/" + dep),
      js: js.map((dep) => assets + "/_app/" + dep),
      styles
    };
  }
  function render(request, {
    prerender
  } = {}) {
    const host = request.headers["host"];
    return respond({ ...request, host }, options, { prerender });
  }
  var subscriber_queue = [];
  function readable(value, start) {
    return {
      subscribe: writable(value, start).subscribe
    };
  }
  function writable(value, start = noop) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
              subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update(fn) {
      set(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update, subscribe: subscribe2 };
  }
  function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single ? [stores] : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
      let inited = false;
      const values = [];
      let pending = 0;
      let cleanup = noop;
      const sync = () => {
        if (pending) {
          return;
        }
        cleanup();
        const result = fn(single ? values[0] : values, set);
        if (auto) {
          set(result);
        } else {
          cleanup = is_function(result) ? result : noop;
        }
      };
      const unsubscribers = stores_array.map((store2, i2) => subscribe(store2, (value) => {
        values[i2] = value;
        pending &= ~(1 << i2);
        if (inited) {
          sync();
        }
      }, () => {
        pending |= 1 << i2;
      }));
      inited = true;
      sync();
      return function stop() {
        run_all(unsubscribers);
        cleanup();
      };
    });
  }
  var isNavOpen = writable(true);
  var contact = "data:image/png;base64,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";
  var cv = "/_app/assets/cv-780e515c.png";
  var github = "/_app/assets/github-79b1a74f.png";
  var icon21 = "/_app/assets/icon21-0894a9d6.png";
  var linkedin = "/_app/assets/linkedin-2e2859ea.png";
  var lionHead = "/_app/assets/lionHead-71e83f1c.png";
  var myob = "/_app/assets/myob-0a937857.png";
  var taskr$1 = "/_app/assets/taskr-d7557b53.png";
  var thissite$1 = "/_app/assets/thissite-6295f94e.png";
  var tictactoe$1 = "/_app/assets/tictactoe-799237a6.png";
  var parseNumber = parseFloat;
  function joinCss(obj, separator = ";") {
    let texts;
    if (Array.isArray(obj)) {
      texts = obj.filter((text) => text);
    } else {
      texts = [];
      for (const prop in obj) {
        if (obj[prop]) {
          texts.push(`${prop}:${obj[prop]}`);
        }
      }
    }
    return texts.join(separator);
  }
  function getStyles(style, size, pull, fw) {
    let float;
    let width;
    const height = "1em";
    let lineHeight;
    let fontSize;
    let textAlign;
    let verticalAlign = "-.125em";
    const overflow = "visible";
    if (fw) {
      textAlign = "center";
      width = "1.25em";
    }
    if (pull) {
      float = pull;
    }
    if (size) {
      if (size == "lg") {
        fontSize = "1.33333em";
        lineHeight = ".75em";
        verticalAlign = "-.225em";
      } else if (size == "xs") {
        fontSize = ".75em";
      } else if (size == "sm") {
        fontSize = ".875em";
      } else {
        fontSize = size.replace("x", "em");
      }
    }
    return joinCss([
      joinCss({
        float,
        width,
        height,
        "line-height": lineHeight,
        "font-size": fontSize,
        "text-align": textAlign,
        "vertical-align": verticalAlign,
        "transform-origin": "center",
        overflow
      }),
      style
    ]);
  }
  function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
    let flipX = 1;
    let flipY = 1;
    if (flip) {
      if (flip == "horizontal") {
        flipX = -1;
      } else if (flip == "vertical") {
        flipY = -1;
      } else {
        flipX = flipY = -1;
      }
    }
    return joinCss([
      `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
      `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
      rotate && `rotate(${rotate}${rotateUnit})`
    ], " ");
  }
  var css$j = {
    code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
    map: `{"version":3,"file":"fa.svelte","sources":["fa.svelte"],"sourcesContent":["<script>\\nimport {\\n  joinCss,\\n  getStyles,\\n  getTransform,\\n} from './utils';\\n\\nlet clazz = '';\\nexport { clazz as class };\\nexport let id = '';\\nexport let style = '';\\n\\nexport let icon;\\n\\nexport let size = '';\\nexport let color = '';\\n\\nexport let fw = false;\\nexport let pull = '';\\n\\nexport let scale = 1;\\nexport let translateX = 0;\\nexport let translateY = 0;\\nexport let rotate = '';\\nexport let flip = false;\\n\\nexport let spin = false;\\nexport let pulse = false;\\n\\n// Duotone Icons\\nexport let primaryColor = '';\\nexport let secondaryColor = '';\\nexport let primaryOpacity = 1;\\nexport let secondaryOpacity = 0.4;\\nexport let swapOpacity = false;\\n\\nlet i;\\nlet c;\\nlet s;\\nlet transform;\\n\\n$: i = (icon && icon.icon) || [0, 0, '', [], ''];\\n\\n$: c = joinCss(\\n  [\\n    clazz,\\n    'fa',\\n    spin && 'spin',\\n    pulse && 'pulse',\\n  ],\\n  ' ',\\n);\\n\\n$: s = getStyles(style, size, pull, fw);\\n\\n$: transform = getTransform(scale, translateX, translateY, rotate, flip, 512);\\n<\/script>\\n\\n<style>\\n.spin {\\n  animation: spin 2s 0s infinite linear;\\n}\\n\\n.pulse {\\n  animation: spin 1s infinite steps(8);\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n</style>\\n\\n{#if i[4]}\\n  <svg\\n    {id}\\n    class={c}\\n    style={s}\\n    viewBox={\`0 0 \${i[0]} \${i[1]}\`}\\n    aria-hidden=\\"true\\"\\n    role=\\"img\\"\\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n  >\\n    <g\\n      transform={\`translate(\${i[0] / 2} \${i[1] / 2})\`}\\n      transform-origin={\`\${i[0] / 4} 0\`}\\n    >\\n      <g {transform}>\\n        {#if typeof i[4] == 'string'}\\n          <path\\n            d={i[4]}\\n            fill={color || primaryColor || 'currentColor'}\\n            transform={\`translate(\${i[0] / -2} \${i[1] / -2})\`}\\n          />\\n        {:else}\\n          <path\\n            d={i[4][0]}\\n            fill={secondaryColor || color || 'currentColor'}\\n            fill-opacity={swapOpacity != false ? primaryOpacity : secondaryOpacity}\\n            transform={\`translate(\${i[0] / -2} \${i[1] / -2})\`}\\n          />\\n          <path\\n            d={i[4][1]}\\n            fill={primaryColor || color || 'currentColor'}\\n            fill-opacity={swapOpacity != false ? secondaryOpacity : primaryOpacity}\\n            transform={\`translate(\${i[0] / -2} \${i[1] / -2})\`}\\n          />\\n        {/if}\\n      </g>\\n    </g>\\n  </svg>\\n{/if}\\n"],"names":[],"mappings":"AA2DA,KAAK,eAAC,CAAC,AACL,SAAS,CAAE,mBAAI,CAAC,EAAE,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,AACvC,CAAC,AAED,MAAM,eAAC,CAAC,AACN,SAAS,CAAE,mBAAI,CAAC,EAAE,CAAC,QAAQ,CAAC,MAAM,CAAC,CAAC,AACtC,CAAC,AAED,WAAW,mBAAK,CAAC,AACf,EAAE,AAAC,CAAC,AACF,SAAS,CAAE,OAAO,IAAI,CAAC,AACzB,CAAC,AACD,IAAI,AAAC,CAAC,AACJ,SAAS,CAAE,OAAO,MAAM,CAAC,AAC3B,CAAC,AACH,CAAC"}`
  };
  var Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { class: clazz = "" } = $$props;
    let { id = "" } = $$props;
    let { style = "" } = $$props;
    let { icon } = $$props;
    let { size = "" } = $$props;
    let { color = "" } = $$props;
    let { fw = false } = $$props;
    let { pull = "" } = $$props;
    let { scale = 1 } = $$props;
    let { translateX = 0 } = $$props;
    let { translateY = 0 } = $$props;
    let { rotate = "" } = $$props;
    let { flip = false } = $$props;
    let { spin = false } = $$props;
    let { pulse = false } = $$props;
    let { primaryColor = "" } = $$props;
    let { secondaryColor = "" } = $$props;
    let { primaryOpacity = 1 } = $$props;
    let { secondaryOpacity = 0.4 } = $$props;
    let { swapOpacity = false } = $$props;
    let i2;
    let c2;
    let s2;
    let transform;
    if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
      $$bindings.class(clazz);
    if ($$props.id === void 0 && $$bindings.id && id !== void 0)
      $$bindings.id(id);
    if ($$props.style === void 0 && $$bindings.style && style !== void 0)
      $$bindings.style(style);
    if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
      $$bindings.icon(icon);
    if ($$props.size === void 0 && $$bindings.size && size !== void 0)
      $$bindings.size(size);
    if ($$props.color === void 0 && $$bindings.color && color !== void 0)
      $$bindings.color(color);
    if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
      $$bindings.fw(fw);
    if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
      $$bindings.pull(pull);
    if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
      $$bindings.scale(scale);
    if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
      $$bindings.translateX(translateX);
    if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
      $$bindings.translateY(translateY);
    if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
      $$bindings.rotate(rotate);
    if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
      $$bindings.flip(flip);
    if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
      $$bindings.spin(spin);
    if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
      $$bindings.pulse(pulse);
    if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
      $$bindings.primaryColor(primaryColor);
    if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
      $$bindings.secondaryColor(secondaryColor);
    if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
      $$bindings.primaryOpacity(primaryOpacity);
    if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
      $$bindings.secondaryOpacity(secondaryOpacity);
    if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
      $$bindings.swapOpacity(swapOpacity);
    $$result.css.add(css$j);
    i2 = icon && icon.icon || [0, 0, "", [], ""];
    c2 = joinCss([clazz, "fa", spin && "spin", pulse && "pulse"], " ");
    s2 = getStyles(style, size, pull, fw);
    transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
    return `${i2[4] ? `<svg${add_attribute("id", id, 0)} class="${escape(null_to_empty(c2)) + " svelte-1cj2gr0"}"${add_attribute("style", s2, 0)}${add_attribute("viewBox", `0 0 ${i2[0]} ${i2[1]}`, 0)} aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g${add_attribute("transform", `translate(${i2[0] / 2} ${i2[1] / 2})`, 0)}${add_attribute("transform-origin", `${i2[0] / 4} 0`, 0)}><g${add_attribute("transform", transform, 0)}>${typeof i2[4] == "string" ? `<path${add_attribute("d", i2[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)}${add_attribute("transform", `translate(${i2[0] / -2} ${i2[1] / -2})`, 0)}></path>` : `<path${add_attribute("d", i2[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)}${add_attribute("transform", `translate(${i2[0] / -2} ${i2[1] / -2})`, 0)}></path>
          <path${add_attribute("d", i2[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)}${add_attribute("transform", `translate(${i2[0] / -2} ${i2[1] / -2})`, 0)}></path>`}</g></g></svg>` : ``}`;
  });
  var Fa$1 = Fa;
  var css$i = {
    code: `button.svelte-12xfadp{transition:transform .25s ease}button.svelte-12xfadp:hover{transform:scale(1.2)}button.svelte-12xfadp{display:flex;margin:1rem auto 3rem;color:var(--color-primary-grey);border:none;background:transparent}[tooltip].svelte-12xfadp{position:relative}[tooltip].svelte-12xfadp::before,[tooltip].svelte-12xfadp::after{text-transform:none;line-height:1;user-select:none;pointer-events:none;position:absolute;display:none;opacity:0}[tooltip].svelte-12xfadp::before{content:'';border:5px solid;z-index:1001}[tooltip].svelte-12xfadp::after{content:attr(tooltip);text-align:center;min-width:3em;max-width:21em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:1ch 1.5ch;border-radius:.3ch;box-shadow:0 1em 2em -.5em var(--color-primary-dark);background:var(--color-text);color:var(--color-primary-dark);z-index:1000}[tooltip].svelte-12xfadp:hover::before,[tooltip].svelte-12xfadp:hover::after{display:block}[tooltip=''].svelte-12xfadp::before,[tooltip=''].svelte-12xfadp::after{display:none !important}[tooltip][flow^="right"].svelte-12xfadp::before{top:50%;border-left-width:0;border-top-color:transparent;border-bottom-color:transparent;border-right-color:var(--color-text);right:calc(0em - 5px);transform:translate(.5em, -50%)}[tooltip][flow^="right"].svelte-12xfadp::after{top:50%;left:calc(100% + 5px);transform:translate(.5em, -50%)}@keyframes svelte-12xfadp-tooltips-vert{to{opacity:1;transform:translate(-50%, 0)}}@keyframes svelte-12xfadp-tooltips-horz{to{opacity:1;transform:translate(0, -50%)}}[tooltip][flow^="right"].svelte-12xfadp:hover::before,[tooltip][flow^="right"].svelte-12xfadp:hover::after{animation:svelte-12xfadp-tooltips-horz 300ms ease-out forwards}`,
    map: `{"version":3,"file":"AppBarHomeIcon.svelte","sources":["AppBarHomeIcon.svelte"],"sourcesContent":["<script>\\n    import Fa from 'svelte-fa/src/fa.svelte';\\n\\n    export let href;\\n    export let tooltip = false;\\n    export let projectIcon;\\n<\/script>\\n\\n    <a { href } sveltekit:prefetch>\\n        <button { tooltip } aria-label={ tooltip } flow=\\"right\\">\\n            <Fa icon={ projectIcon } size='2.5x' />\\n        </button>\\n    </a>\\n\\n<style>\\n    button {\\n        transition:transform .25s ease;\\n    }\\n\\n    button:hover {\\n        transform:scale(1.2);\\n    }\\n\\n    button {\\n        display: flex;\\n        margin: 1rem auto 3rem;\\n        color: var(--color-primary-grey);\\n        border: none;\\n        background: transparent;\\n    }\\n\\n    /* START TOOLTIP STYLES */\\n    [tooltip] {\\n        position: relative;\\n    }\\n\\n    /* Applies to all tooltips */\\n    [tooltip]::before,\\n    [tooltip]::after {\\n        text-transform: none;\\n        line-height: 1;\\n        user-select: none;\\n        pointer-events: none;\\n        position: absolute;\\n        display: none;\\n        opacity: 0;\\n    }\\n    [tooltip]::before {\\n        content: '';\\n        border: 5px solid;\\n        z-index: 1001;\\n    }\\n    [tooltip]::after {\\n        content: attr(tooltip);\\n        text-align: center;\\n        min-width: 3em;\\n        max-width: 21em;\\n        white-space: nowrap;\\n        overflow: hidden;\\n        text-overflow: ellipsis;\\n        padding: 1ch 1.5ch;\\n        border-radius: .3ch;\\n        box-shadow: 0 1em 2em -.5em var(--color-primary-dark);\\n        background: var(--color-text);\\n        color: var(--color-primary-dark);\\n        z-index: 1000;\\n    }\\n\\n    /* Make the tooltips respond to hover */\\n    [tooltip]:hover::before,\\n    [tooltip]:hover::after {\\n        display: block;\\n    }\\n\\n    /* don't show empty tooltips */\\n    [tooltip='']::before,\\n    [tooltip='']::after {\\n        display: none !important;\\n    }\\n\\n    [tooltip][flow^=\\"right\\"]::before {\\n        top: 50%;\\n        border-left-width: 0;\\n        border-top-color: transparent;\\n        border-bottom-color: transparent;\\n        border-right-color: var(--color-text);\\n        right: calc(0em - 5px);\\n        transform: translate(.5em, -50%);\\n    }\\n    [tooltip][flow^=\\"right\\"]::after {\\n        top: 50%;\\n        left: calc(100% + 5px);\\n        transform: translate(.5em, -50%);\\n    }\\n\\n    /* KEYFRAMES */\\n    @keyframes tooltips-vert {\\n        to {\\n        opacity: 1;\\n        transform: translate(-50%, 0);\\n        }\\n    }\\n\\n    @keyframes tooltips-horz {\\n        to {\\n        opacity: 1;\\n        transform: translate(0, -50%);\\n        }\\n    }\\n\\n    [tooltip][flow^=\\"right\\"]:hover::before,\\n    [tooltip][flow^=\\"right\\"]:hover::after {\\n        animation: tooltips-horz 300ms ease-out forwards;\\n    }\\n</style>"],"names":[],"mappings":"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"}`
  };
  var AppBarHomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { href } = $$props;
    let { tooltip = false } = $$props;
    let { projectIcon } = $$props;
    if ($$props.href === void 0 && $$bindings.href && href !== void 0)
      $$bindings.href(href);
    if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
      $$bindings.tooltip(tooltip);
    if ($$props.projectIcon === void 0 && $$bindings.projectIcon && projectIcon !== void 0)
      $$bindings.projectIcon(projectIcon);
    $$result.css.add(css$i);
    return `<a${add_attribute("href", href, 0)} sveltekit:prefetch><button${add_attribute("tooltip", tooltip, 0)}${add_attribute("aria-label", tooltip, 0)} flow="${"right"}" class="${"svelte-12xfadp"}">${validate_component(Fa$1, "Fa").$$render($$result, { icon: projectIcon, size: "2.5x" }, {}, {})}</button>
    </a>`;
  });
  var css$h = {
    code: `img.svelte-lqpbol.svelte-lqpbol,img.svelte-lqpbol+div.svelte-lqpbol{transition:transform .25s ease}img.svelte-lqpbol.svelte-lqpbol:hover,img.svelte-lqpbol:hover+div.svelte-lqpbol{transform:scale(1.4)}button.svelte-lqpbol.svelte-lqpbol{display:block;position:absolute;margin:0.75rem auto;color:var(--color-primary-grey);border:none;background:transparent}.external-dot.svelte-lqpbol.svelte-lqpbol{position:absolute;top:2rem;left:2rem;height:1rem;width:1rem;background-color:var(--color-green);border-radius:50%}[tooltip].svelte-lqpbol.svelte-lqpbol{position:relative}[tooltip].svelte-lqpbol.svelte-lqpbol::before,[tooltip].svelte-lqpbol.svelte-lqpbol::after{text-transform:none;line-height:1;user-select:none;pointer-events:none;position:absolute;display:none;opacity:0}[tooltip].svelte-lqpbol.svelte-lqpbol::before{content:'';border:5px solid;z-index:1001}[tooltip].svelte-lqpbol.svelte-lqpbol::after{content:attr(tooltip);text-align:center;min-width:3em;max-width:21em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:1ch 1.5ch;border-radius:.3ch;box-shadow:0 1em 2em -.5em var(--color-primary-dark);;;background:var(--color-text);color:var(--color-primary-dark);z-index:1000}[tooltip].svelte-lqpbol.svelte-lqpbol:hover::before,[tooltip].svelte-lqpbol.svelte-lqpbol:hover::after{display:block}[tooltip=''].svelte-lqpbol.svelte-lqpbol::before,[tooltip=''].svelte-lqpbol.svelte-lqpbol::after{display:none !important}[tooltip][flow^="right"].svelte-lqpbol.svelte-lqpbol::before{top:50%;border-left-width:0;border-top-color:transparent;border-bottom-color:transparent;border-right-color:var(--color-text);right:calc(0em - 5px);transform:translate(.5em, -50%)}[tooltip][flow^="right"].svelte-lqpbol.svelte-lqpbol::after{top:50%;left:calc(100% + 5px);transform:translate(.5em, -50%)}@keyframes svelte-lqpbol-tooltips-vert{to{opacity:1;transform:translate(-50%, 0)}}@keyframes svelte-lqpbol-tooltips-horz{to{opacity:1;transform:translate(0, -50%)}}[tooltip][flow^="right"].svelte-lqpbol.svelte-lqpbol:hover::before,[tooltip][flow^="right"].svelte-lqpbol.svelte-lqpbol:hover::after{animation:svelte-lqpbol-tooltips-horz 300ms ease-out forwards}@keyframes svelte-lqpbol-stretch{0%{transform:scale(1)}50%{transform:scale(1.3)}100%{transform:scale(1)}}`,
    map: `{"version":3,"file":"AppBarIcon.svelte","sources":["AppBarIcon.svelte"],"sourcesContent":["<script>\\n    import { drag } from '$lib/drag';\\n\\n    export let alt;\\n    export let external = null;\\n    export let href = null;\\n    export let projectIcon;\\n    export let tooltip = false;\\n<\/script>\\n\\n{#if external}\\n    <a { href } on:click|preventDefault target=\\"_blank\\" rel=\\"noreferrer\\" draggable=\\"false\\">\\n        <button use:drag={'appBarIcon'} { tooltip } aria-label={ tooltip } flow=\\"right\\">\\n            <img src={ projectIcon } { alt } height=\\"40px\\" width=\\"40px\\" draggable=\\"false\\">\\n            <div class=\\"external-dot\\"/>\\n        </button>\\n    </a>\\n\\n    {:else}\\n        <a {href} on:click|preventDefault sveltekit:prefetch draggable=\\"false\\">\\n            <button use:drag={'appBarIcon'} { tooltip } aria-label={ tooltip } flow=\\"right\\">\\n                <img src={ projectIcon } { alt } height=\\"40px\\" width=\\"40px\\" draggable=\\"false\\">\\n            </button>\\n        </a>\\n{/if}\\n\\n<style>\\n    img, img + div {\\n        transition:transform .25s ease;\\n    }\\n    img:hover, img:hover + div {\\n        transform:scale(1.4);\\n    }\\n\\n    button {\\n        display: block;\\n        position: absolute;\\n        margin: 0.75rem auto;\\n        color: var(--color-primary-grey);\\n        border: none;\\n        background: transparent;\\n    }\\n    .external-dot {\\n        position: absolute;\\n        top: 2rem;\\n        left: 2rem;\\n        height: 1rem;\\n        width: 1rem;\\n        background-color: var(--color-green);\\n        border-radius: 50%;\\n    }\\n    /* START TOOLTIP STYLES */\\n    [tooltip] {\\n        position: relative;\\n    }\\n\\n    /* Applies to all tooltips */\\n    [tooltip]::before,\\n    [tooltip]::after {\\n        text-transform: none;\\n        line-height: 1;\\n        user-select: none;\\n        pointer-events: none;\\n        position: absolute;\\n        display: none;\\n        opacity: 0;\\n    }\\n    [tooltip]::before {\\n        content: '';\\n        border: 5px solid;\\n        z-index: 1001;\\n    }\\n    [tooltip]::after {\\n        content: attr(tooltip);\\n        text-align: center;\\n        min-width: 3em;\\n        max-width: 21em;\\n        white-space: nowrap;\\n        overflow: hidden;\\n        text-overflow: ellipsis;\\n        padding: 1ch 1.5ch;\\n        border-radius: .3ch;\\n        box-shadow: 0 1em 2em -.5em var(--color-primary-dark);;\\n        background: var(--color-text);\\n        color: var(--color-primary-dark);\\n        z-index: 1000;\\n    }\\n\\n    /* Make the tooltips respond to hover */\\n    [tooltip]:hover::before,\\n    [tooltip]:hover::after {\\n        display: block;\\n    }\\n\\n    /* Don't show empty tooltips */\\n    [tooltip='']::before,\\n    [tooltip='']::after {\\n        display: none !important;\\n    }\\n\\n    [tooltip][flow^=\\"right\\"]::before {\\n        top: 50%;\\n        border-left-width: 0;\\n        border-top-color: transparent;\\n        border-bottom-color: transparent;\\n        border-right-color: var(--color-text);\\n        right: calc(0em - 5px);\\n        transform: translate(.5em, -50%);\\n    }\\n    [tooltip][flow^=\\"right\\"]::after {\\n        top: 50%;\\n        left: calc(100% + 5px);\\n        transform: translate(.5em, -50%);\\n    }\\n\\n    /* KEYFRAMES */\\n    @keyframes tooltips-vert {\\n        to {\\n        opacity: 1;\\n        transform: translate(-50%, 0);\\n        }\\n    }\\n\\n    @keyframes tooltips-horz {\\n        to {\\n        opacity: 1;\\n        transform: translate(0, -50%);\\n        }\\n    }\\n\\n    [tooltip][flow^=\\"right\\"]:hover::before,\\n    [tooltip][flow^=\\"right\\"]:hover::after {\\n        animation: tooltips-horz 300ms ease-out forwards;\\n    }\\n\\n    @keyframes stretch {\\n        0% {\\n            transform: scale(1);\\n        }\\n        50% {\\n            transform: scale(1.3);\\n\\n        }\\n        100% {\\n            transform: scale(1);\\n        }\\n    }\\n</style>"],"names":[],"mappings":"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"}`
  };
  var AppBarIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { alt } = $$props;
    let { external = null } = $$props;
    let { href = null } = $$props;
    let { projectIcon } = $$props;
    let { tooltip = false } = $$props;
    if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
      $$bindings.alt(alt);
    if ($$props.external === void 0 && $$bindings.external && external !== void 0)
      $$bindings.external(external);
    if ($$props.href === void 0 && $$bindings.href && href !== void 0)
      $$bindings.href(href);
    if ($$props.projectIcon === void 0 && $$bindings.projectIcon && projectIcon !== void 0)
      $$bindings.projectIcon(projectIcon);
    if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
      $$bindings.tooltip(tooltip);
    $$result.css.add(css$h);
    return `${external ? `<a${add_attribute("href", href, 0)} target="${"_blank"}" rel="${"noreferrer"}" draggable="${"false"}"><button${add_attribute("tooltip", tooltip, 0)}${add_attribute("aria-label", tooltip, 0)} flow="${"right"}" class="${"svelte-lqpbol"}"><img${add_attribute("src", projectIcon, 0)}${add_attribute("alt", alt, 0)} height="${"40px"}" width="${"40px"}" draggable="${"false"}" class="${"svelte-lqpbol"}">
            <div class="${"external-dot svelte-lqpbol"}"></div></button></a>` : `<a${add_attribute("href", href, 0)} sveltekit:prefetch draggable="${"false"}"><button${add_attribute("tooltip", tooltip, 0)}${add_attribute("aria-label", tooltip, 0)} flow="${"right"}" class="${"svelte-lqpbol"}"><img${add_attribute("src", projectIcon, 0)}${add_attribute("alt", alt, 0)} height="${"40px"}" width="${"40px"}" draggable="${"false"}" class="${"svelte-lqpbol"}"></button></a>`}`;
  });
  var css$g = {
    code: `.toggle-arrow.svelte-1gytyth{transform:rotate(-180deg);transition:all .3s ease}button.svelte-1gytyth{display:flex;position:fixed;bottom:1rem;margin:1rem auto;margin-left:0.75rem;height:40px;width:40px;min-height:40px;min-width:40px;border-radius:50%;border:none;color:var(--color-primary-dark);background-color:var(--color-primary-light);border:3px solid var(--color-primary-dark)}button.svelte-1gytyth:hover{color:var(--color-primary-light);background-color:var(--color-primary-dark);border:2px solid var(--color-primary-light)}#arrow.svelte-1gytyth{margin:auto;transition:all .3s ease}[tooltip].svelte-1gytyth::before,[tooltip].svelte-1gytyth::after{text-transform:none;line-height:1;user-select:none;pointer-events:none;position:absolute;display:none;opacity:0}[tooltip].svelte-1gytyth::before{content:'';border:5px solid;z-index:1001}[tooltip].svelte-1gytyth::after{content:attr(tooltip);text-align:center;min-width:3em;max-width:21em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:1ch 1.5ch;border-radius:.3ch;box-shadow:0 1em 2em -.5em var(--color-primary-dark);;;background:var(--color-text);color:var(--color-primary-dark);z-index:1000}[tooltip].svelte-1gytyth:hover::before,[tooltip].svelte-1gytyth:hover::after{display:block}[tooltip=''].svelte-1gytyth::before,[tooltip=''].svelte-1gytyth::after{display:none !important}[tooltip][flow^="right"].svelte-1gytyth::before{top:50%;border-left-width:0;border-top-color:transparent;border-bottom-color:transparent;border-right-color:var(--color-text);right:calc(0em - 5px);transform:translate(.5em, -50%)}[tooltip][flow^="right"].svelte-1gytyth::after{top:50%;left:calc(100% + 5px);transform:translate(.5em, -50%)}@keyframes svelte-1gytyth-tooltips-vert{to{opacity:1;transform:translate(-50%, 0)}}@keyframes svelte-1gytyth-tooltips-horz{to{opacity:1;transform:translate(0, -50%)}}[tooltip][flow^="right"].svelte-1gytyth:hover::before,[tooltip][flow^="right"].svelte-1gytyth:hover::after{animation:svelte-1gytyth-tooltips-horz 300ms ease-out forwards}@keyframes svelte-1gytyth-stretch{0%{transform:scale(1)}50%{transform:scale(1.3)}100%{transform:scale(1)}}`,
    map: `{"version":3,"file":"AppMenuToggle.svelte","sources":["AppMenuToggle.svelte"],"sourcesContent":["<script>\\n    import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';\\n    import Fa from 'svelte-fa/src/fa.svelte';\\n\\n    import { isNavOpen } from '$lib/store';\\n\\n    let showMenu;\\n\\n    isNavOpen.subscribe((value) => {\\n        showMenu = value;\\n    });\\n\\n    function toggleMenu() {\\n        isNavOpen.set(!showMenu);\\n    }\\n\\n<\/script>\\n\\n<button id=\\"expander\\" aria-label=\\"expand menu\\" href=\\"/\\" on:click={ toggleMenu } tooltip={ \`\${ showMenu ? 'Hide' : 'Show' } Menu\` } flow=\\"right\\">\\n    <div id=\\"arrow\\" class={showMenu ? 'toggle-arrow' : null }>\\n        <Fa icon={ faAngleLeft } size=\\"2x\\" />\\n    </div>\\n</button>\\n\\n<style>\\n    .toggle-arrow {\\n        transform: rotate(-180deg);\\n        transition: all .3s ease;\\n    }\\n\\n    button {\\n        display: flex;\\n        position: fixed;\\n        bottom: 1rem;\\n        margin: 1rem auto;\\n        margin-left: 0.75rem;\\n        height: 40px;\\n        width: 40px;\\n        min-height: 40px;\\n        min-width: 40px;\\n        border-radius: 50%;\\n        border: none;\\n        color: var(--color-primary-dark);\\n        background-color: var(--color-primary-light);\\n        border: 3px solid var(--color-primary-dark);\\n\\n    }\\n\\n    button:hover {\\n        color: var(--color-primary-light);\\n        background-color: var(--color-primary-dark);\\n        border: 2px solid var(--color-primary-light);\\n    }\\n\\n    #arrow {\\n        margin: auto;\\n        transition: all .3s ease;\\n    }\\n\\n    /* START TOOLTIP STYLES */\\n\\n    /* Applies to all tooltips */\\n    [tooltip]::before,\\n    [tooltip]::after {\\n        text-transform: none;\\n        line-height: 1;\\n        user-select: none;\\n        pointer-events: none;\\n        position: absolute;\\n        display: none;\\n        opacity: 0;\\n    }\\n    [tooltip]::before {\\n        content: '';\\n        border: 5px solid;\\n        z-index: 1001;\\n    }\\n    [tooltip]::after {\\n        content: attr(tooltip);\\n        text-align: center;\\n        min-width: 3em;\\n        max-width: 21em;\\n        white-space: nowrap;\\n        overflow: hidden;\\n        text-overflow: ellipsis;\\n        padding: 1ch 1.5ch;\\n        border-radius: .3ch;\\n        box-shadow: 0 1em 2em -.5em var(--color-primary-dark);;\\n        background: var(--color-text);\\n        color: var(--color-primary-dark);\\n        z-index: 1000;\\n    }\\n\\n    /* Make the tooltips respond to hover */\\n    [tooltip]:hover::before,\\n    [tooltip]:hover::after {\\n        display: block;\\n    }\\n\\n    /* Don't show empty tooltips */\\n    [tooltip='']::before,\\n    [tooltip='']::after {\\n        display: none !important;\\n    }\\n\\n    [tooltip][flow^=\\"right\\"]::before {\\n        top: 50%;\\n        border-left-width: 0;\\n        border-top-color: transparent;\\n        border-bottom-color: transparent;\\n        border-right-color: var(--color-text);\\n        right: calc(0em - 5px);\\n        transform: translate(.5em, -50%);\\n    }\\n    [tooltip][flow^=\\"right\\"]::after {\\n        top: 50%;\\n        left: calc(100% + 5px);\\n        transform: translate(.5em, -50%);\\n    }\\n\\n    /* KEYFRAMES */\\n    @keyframes tooltips-vert {\\n        to {\\n        opacity: 1;\\n        transform: translate(-50%, 0);\\n        }\\n    }\\n\\n    @keyframes tooltips-horz {\\n        to {\\n        opacity: 1;\\n        transform: translate(0, -50%);\\n        }\\n    }\\n\\n    [tooltip][flow^=\\"right\\"]:hover::before,\\n    [tooltip][flow^=\\"right\\"]:hover::after {\\n        animation: tooltips-horz 300ms ease-out forwards;\\n    }\\n\\n    @keyframes stretch {\\n        0% {\\n            transform: scale(1);\\n        }\\n        50% {\\n            transform: scale(1.3);\\n\\n        }\\n        100% {\\n            transform: scale(1);\\n        }\\n    }\\n</style>"],"names":[],"mappings":"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"}`
  };
  var AppMenuToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let showMenu;
    isNavOpen.subscribe((value) => {
      showMenu = value;
    });
    $$result.css.add(css$g);
    return `<button id="${"expander"}" aria-label="${"expand menu"}" href="${"/"}"${add_attribute("tooltip", `${showMenu ? "Hide" : "Show"} Menu`, 0)} flow="${"right"}" class="${"svelte-1gytyth"}"><div id="${"arrow"}" class="${escape(null_to_empty(showMenu ? "toggle-arrow" : null)) + " svelte-1gytyth"}">${validate_component(Fa$1, "Fa").$$render($$result, { icon: faAngleLeft, size: "2x" }, {}, {})}</div>
</button>`;
  });
  var css$f = {
    code: ".wrapper.svelte-1j2jxph{min-width:4rem}nav.svelte-1j2jxph{position:fixed;height:100%;width:4rem;background:linear-gradient(rgba(125, 211, 252), rgba(45, 212, 191));z-index:1}",
    map: `{"version":3,"file":"AppBar.svelte","sources":["AppBar.svelte"],"sourcesContent":["<script>\\n    import { isNavOpen } from './store.js';\\n\\n    import contact from '../../static/contact.png';\\n    import cv from '../../static/cv.png';\\n    import github from '../../static/github.png';\\n    import icon21 from '../../static/icon21.png';\\n    import linkedin from '../../static/linkedin.png';\\n    import lionHead from '../../static/lionHead.png';\\n    import myob from '../../static/myob.png';\\n    import taskr from '../../static/taskr.png';\\n    import thissite from '../../static/thissite.png';\\n    import tictactoe from '../../static/tictactoe.png';\\n\\n    import { faHouseUser } from '@fortawesome/free-solid-svg-icons';\\n\\n    import AppBarHomeIcon from '$lib/AppBarHomeIcon.svelte';\\n    import AppBarIcon from '$lib/AppBarIcon.svelte';\\n    import AppMenuToggle from '$lib/AppMenuToggle.svelte';\\n\\n    let showMenu;\\n    isNavOpen.subscribe((value) => {\\n        showMenu = value;\\n    });\\n\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n    <nav>\\n        <AppBarHomeIcon tooltip={ 'Home' } projectIcon={ faHouseUser } href=\\"/\\" />\\n        <AppBarIcon tooltip={ 'myob Sales Tracker' } projectIcon={ myob } href=\\"/projects/salestracker\\" alt=\\"myob icon\\" />\\n        <AppBarIcon tooltip={ 'bedz.me' } projectIcon={ lionHead } href=\\"/projects/bedzme\\" alt=\\"bedz.me lion icon\\" />\\n        <AppBarIcon tooltip={ 'Taskr' } projectIcon={ taskr } href=\\"/projects/taskr\\" alt=\\"taskr icon\\" />\\n        <AppBarIcon tooltip={ '21' } projectIcon={ icon21 } href=\\"/projects/21\\" alt=\\"21 icon\\" />\\n        <AppBarIcon tooltip={ 'Tic-Tac-Toe' } projectIcon={ tictactoe } href=\\"/projects/tictactoe\\" alt=\\"tic-tac-toe icon\\" />\\n        <AppBarIcon tooltip={ 'This Site' } projectIcon={ thissite } href=\\"/projects/thissite\\" alt=\\"this site icon\\" />\\n        <AppBarIcon tooltip={ 'Resume / CV' } projectIcon={ cv } href=\\"/resume\\" alt=\\"resume icon\\" />\\n        <AppBarIcon tooltip={ 'GitHub' } projectIcon={ github } href=\\"https://github.com/danibedz\\" alt=\\"github icon\\" external />\\n        <AppBarIcon tooltip={ 'LinkedIn' } projectIcon={ linkedin } href=\\"https://www.linkedin.com/in/danibednarski\\" alt=\\"linkedIn icon\\" external />\\n        <AppBarIcon tooltip={ 'Contact Me' } projectIcon={ contact } href=\\"/contact\\" alt=\\"Contact icon\\" />\\n        <AppMenuToggle />\\n    </nav>\\n</div>\\n<style>\\n    .wrapper {\\n        min-width: 4rem;\\n    }\\n    nav {\\n        position: fixed;\\n        height: 100%;\\n        width: 4rem;\\n        background: linear-gradient(rgba(125, 211, 252), rgba(45, 212, 191));\\n        z-index: 1;\\n    }\\n</style>"],"names":[],"mappings":"AA4CI,QAAQ,eAAC,CAAC,AACN,SAAS,CAAE,IAAI,AACnB,CAAC,AACD,GAAG,eAAC,CAAC,AACD,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CACpE,OAAO,CAAE,CAAC,AACd,CAAC"}`
  };
  var AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    isNavOpen.subscribe((value) => {
    });
    $$result.css.add(css$f);
    return `<div class="${"wrapper svelte-1j2jxph"}"><nav class="${"svelte-1j2jxph"}">${validate_component(AppBarHomeIcon, "AppBarHomeIcon").$$render($$result, {
      tooltip: "Home",
      projectIcon: faHouseUser,
      href: "/"
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "myob Sales Tracker",
      projectIcon: myob,
      href: "/projects/salestracker",
      alt: "myob icon"
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "bedz.me",
      projectIcon: lionHead,
      href: "/projects/bedzme",
      alt: "bedz.me lion icon"
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "Taskr",
      projectIcon: taskr$1,
      href: "/projects/taskr",
      alt: "taskr icon"
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "21",
      projectIcon: icon21,
      href: "/projects/21",
      alt: "21 icon"
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "Tic-Tac-Toe",
      projectIcon: tictactoe$1,
      href: "/projects/tictactoe",
      alt: "tic-tac-toe icon"
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "This Site",
      projectIcon: thissite$1,
      href: "/projects/thissite",
      alt: "this site icon"
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "Resume / CV",
      projectIcon: cv,
      href: "/resume",
      alt: "resume icon"
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "GitHub",
      projectIcon: github,
      href: "https://github.com/danibedz",
      alt: "github icon",
      external: true
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "LinkedIn",
      projectIcon: linkedin,
      href: "https://www.linkedin.com/in/danibednarski",
      alt: "linkedIn icon",
      external: true
    }, {}, {})}
        ${validate_component(AppBarIcon, "AppBarIcon").$$render($$result, {
      tooltip: "Contact Me",
      projectIcon: contact,
      href: "/contact",
      alt: "Contact icon"
    }, {}, {})}
        ${validate_component(AppMenuToggle, "AppMenuToggle").$$render($$result, {}, {}, {})}</nav>
</div>`;
  });
  var css$e = {
    code: ".wrapper.svelte-1mu4fbn{min-width:15rem;margin-top:7rem}nav.svelte-1mu4fbn{position:fixed;height:100%;width:15rem;background-color:var(--color-primary-dark)}",
    map: `{"version":3,"file":"AppMenu.svelte","sources":["AppMenu.svelte"],"sourcesContent":["<script>\\n    import { isNavOpen } from './store.js';\\n\\n    let showMenu;\\n    isNavOpen.subscribe((value) => {\\n        showMenu = value;\\n    });\\n\\n    let windowWidth;\\n\\n    $: if (windowWidth < 700) {\\n        showMenu = false;\\n    }\\n<\/script>\\n\\n<svelte:window bind:innerWidth={windowWidth} />\\n\\n{#if showMenu}\\n    <div class=\\"wrapper\\">\\n        <nav>\\n            <slot/>\\n        </nav>\\n    </div>\\n{/if}\\n\\n<style>\\n    /* Menu styles */\\n    .wrapper {\\n        min-width: 15rem;\\n        margin-top: 7rem;\\n    }\\n    nav {\\n        position: fixed;\\n        height: 100%;\\n        width: 15rem;\\n        background-color: var(--color-primary-dark);\\n    }\\n</style>"],"names":[],"mappings":"AA2BI,QAAQ,eAAC,CAAC,AACN,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IAAI,AACpB,CAAC,AACD,GAAG,eAAC,CAAC,AACD,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,IAAI,oBAAoB,CAAC,AAC/C,CAAC"}`
  };
  var AppMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let showMenu;
    isNavOpen.subscribe((value) => {
      showMenu = value;
    });
    $$result.css.add(css$e);
    return `

${showMenu ? `<div class="${"wrapper svelte-1mu4fbn"}"><nav class="${"svelte-1mu4fbn"}">${slots.default ? slots.default({}) : ``}</nav></div>` : ``}`;
  });
  var css$d = {
    code: "button.svelte-yd01wg{display:flex;justify-content:space-between;width:90%;color:var(--color-text);background-color:transparent;text-align:left;border:none;border-radius:0.375rem;margin:5%;padding:1rem}button.svelte-yd01wg:hover{background:var(--color-text);color:var(--color-primary-dark)}",
    map: `{"version":3,"file":"AppMenuItem.svelte","sources":["AppMenuItem.svelte"],"sourcesContent":["<script>\\n    export let icon = null;\\n    export let internal = null;\\n    export let href;\\n    export let target = null;\\n    export let text;\\n    export let rel = null;\\n\\n    import Fa from 'svelte-fa/src/fa.svelte';\\n    import { fly } from 'svelte/transition';\\n\\n    function highlightElement(elementId) {\\n        const element = document.querySelector(elementId);\\n        const currentStyles = element.style;\\n        const highlightStyles = {\\n            borderRadius: '10px',\\n        };\\n\\n        if (elementId === '#screenshots') {\\n            highlightStyles.boxShadow = '0 0 3pt 2pt var(--color-text)';\\n        } else {\\n            highlightStyles.boxShadow = '0 0 3pt 2pt var(--color-primary-light)';\\n        }\\n        Object.assign(element.style, highlightStyles);\\n\\n        setTimeout(() => {\\n            element.style = currentStyles;\\n        }, 3000);\\n    }\\n<\/script>\\n\\n<!-- If AppMenuItem does not have front matter for item, (e.g. private repo, no github),\\n    don't render element -->\\n{#if href}\\n<div transition:fly|local={{ x: -200 }} >\\n    <a on:click={ target || internal ? null : highlightElement(href)} { href } { target } { rel }>\\n        <button >\\n            { text }\\n            <Fa icon={ icon } size=\\"1.2x\\" />\\n        </button>\\n        </a>\\n    </div>\\n{/if}\\n\\n<style>\\n    button {\\n        display: flex;\\n        justify-content: space-between;\\n        width: 90%;\\n        color: var(--color-text);\\n        background-color: transparent;\\n        text-align: left;\\n        border: none;\\n        border-radius: 0.375rem;\\n        margin: 5%;\\n        padding: 1rem;\\n    }\\n\\n    button:hover {\\n        background: var(--color-text);\\n        color: var(--color-primary-dark);\\n    }\\n</style>"],"names":[],"mappings":"AA6CI,MAAM,cAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,KAAK,CAAE,GAAG,CACV,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,gBAAgB,CAAE,WAAW,CAC7B,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,QAAQ,CACvB,MAAM,CAAE,EAAE,CACV,OAAO,CAAE,IAAI,AACjB,CAAC,AAED,oBAAM,MAAM,AAAC,CAAC,AACV,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,KAAK,CAAE,IAAI,oBAAoB,CAAC,AACpC,CAAC"}`
  };
  var AppMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { icon = null } = $$props;
    let { internal = null } = $$props;
    let { href } = $$props;
    let { target = null } = $$props;
    let { text } = $$props;
    let { rel = null } = $$props;
    if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
      $$bindings.icon(icon);
    if ($$props.internal === void 0 && $$bindings.internal && internal !== void 0)
      $$bindings.internal(internal);
    if ($$props.href === void 0 && $$bindings.href && href !== void 0)
      $$bindings.href(href);
    if ($$props.target === void 0 && $$bindings.target && target !== void 0)
      $$bindings.target(target);
    if ($$props.text === void 0 && $$bindings.text && text !== void 0)
      $$bindings.text(text);
    if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
      $$bindings.rel(rel);
    $$result.css.add(css$d);
    return `
${href ? `<div><a${add_attribute("href", href, 0)}${add_attribute("target", target, 0)}${add_attribute("rel", rel, 0)}><button class="${"svelte-yd01wg"}">${escape(text)}
            ${validate_component(Fa$1, "Fa").$$render($$result, { icon, size: "1.2x" }, {}, {})}</button></a></div>` : ``}`;
  });
  var daniImg = "/_app/assets/dani-12f12348.png";
  var css$c = {
    code: "img.svelte-1tuv5cx{position:fixed;height:calc(171px * 0.4);width:calc(456px * 0.4);display:flex;top:1rem;margin-left:1.5rem;padding-bottom:2rem}",
    map: `{"version":3,"file":"Logo.svelte","sources":["Logo.svelte"],"sourcesContent":["<script>\\n    import daniImg from '../../static/dani.png';\\n<\/script>\\n\\n<a href=\\"/\\">\\n    <img src={ daniImg } alt=\\"dani logo\\" />\\n</a>\\n\\n<style>\\n    img {\\n        position: fixed;\\n        height: calc(171px * 0.4);\\n        width: calc(456px * 0.4);\\n        display: flex;\\n        top: 1rem;\\n        margin-left: 1.5rem;\\n        padding-bottom: 2rem;\\n    }\\n</style>"],"names":[],"mappings":"AASI,GAAG,eAAC,CAAC,AACD,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CACzB,KAAK,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,GAAG,CAAC,CACxB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,IAAI,AACxB,CAAC"}`
  };
  var Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$c);
    return `<a href="${"/"}"><img${add_attribute("src", daniImg, 0)} alt="${"dani logo"}" class="${"svelte-1tuv5cx"}">
</a>`;
  });
  var css$b = {
    code: `@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");:root{--color-primary-light:rgb(34, 211, 238);--color-primary-dark:rgb(17, 24, 39);--color-primary-grey:rgb(55, 65, 81);--color-text:rgb(255, 255, 255);--color-green:rgb(16, 185, 129)}html, body{height:100%;font-family:monospace, 'Courier New', Courier;overscroll-behavior:none}body{background:var(--color-primary-dark);color:var(--color-text);font-size:16px;background-image:url('/wave.svg');background-size:cover;background-repeat:no-repeat;margin:0}a, button{cursor:pointer;font-family:monospace, 'Courier New', Courier;font-size:16px;text-decoration:none}button:focus{outline:none !important}div.svelte-efzzu1{display:flex}`,
    map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<svelte:head>\\n\\t<title>The Portfolio of Dani Bednarski - danibednarski.com</title>\\n\\t<meta name=\\"description\\" content=\\"The portfolio website of Dani Bednarski. My name is Dani and I'm a web developer based in Melbourne, Australia.\\n        What motivates me is making things that people love to use, and want to share with others.\\n        Please explore the site, check out some of the projects that I have worked on, and reach out if you like what you see.\\" />\\n\\t<html lang=\\"en\\" />\\n    <link rel=\\"apple-touch-icon\\" sizes=\\"180x180\\" href=\\"/apple-touch-icon.png\\">\\n    <link rel=\\"icon\\" type=\\"image/png\\" sizes=\\"32x32\\" href=\\"/favicon-32x32.png\\">\\n    <link rel=\\"icon\\" type=\\"image/png\\" sizes=\\"16x16\\" href=\\"/favicon-16x16.png\\">\\n    <link rel=\\"manifest\\" href=\\"/site.webmanifest\\">\\n</svelte:head>\\n\\n<script>\\n    import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';\\n    import { fly } from 'svelte/transition';\\n\\n    import AppBar from '$lib/AppBar.svelte';\\n    import AppMenu from '$lib/AppMenu.svelte';\\n    import AppMenuItem from '$lib/AppMenuItem.svelte';\\n    import Logo from '$lib/Logo.svelte';\\n<\/script>\\n\\n    <div>\\n        <AppBar />\\n        <div in:fly|local={{ x: -400, duration: 600 }}>\\n            <AppMenu>\\n                <Logo />\\n                <AppMenuItem href='/resume' text='Resume' internal/>\\n                <AppMenuItem href='https://github.com/danibedz' text='GitHub' target='_blank' rel='noreferrer' icon={ faExternalLinkAlt } />\\n                <AppMenuItem href='https://www.linkedin.com/in/danibednarski/' text='LinkedIn' target='_blank' rel='noreferrer' icon={ faExternalLinkAlt } />\\n                <AppMenuItem href='/contact' text='Contact' internal />\\n            </AppMenu>\\n        </div>\\n        <slot />\\n    </div>\\n\\n<style>\\n    @import url(\\"https://fonts.googleapis.com/css2?family=Inter&display=swap\\");\\n\\n    :global(:root) {\\n        --color-primary-light: rgb(34, 211, 238);\\n        --color-primary-dark: rgb(17, 24, 39);\\n        --color-primary-grey: rgb(55, 65, 81);\\n        --color-text: rgb(255, 255, 255);\\n        --color-green: rgb(16, 185, 129);\\n\\n    }\\n    :global(html, body) {\\n        height: 100%;\\n        font-family: monospace, 'Courier New', Courier;\\n        overscroll-behavior: none;\\n    }\\n    :global(body) {\\n        background: var(--color-primary-dark);\\n        color: var(--color-text);\\n        font-size: 16px;\\n        background-image: url('/wave.svg');\\n        background-size: cover;\\n        background-repeat: no-repeat;\\n        margin: 0;\\n    }\\n    :global(a, button) {\\n        cursor: pointer;\\n        font-family: monospace, 'Courier New', Courier;\\n        font-size: 16px;\\n        text-decoration: none;\\n    }\\n\\n    :global(button:focus) {\\n        outline: none !important;\\n    }\\n\\n    div {\\n        display: flex;\\n    }\\n</style>"],"names":[],"mappings":"AAqCI,QAAQ,IAAI,6DAA6D,CAAC,CAAC,AAEnE,KAAK,AAAE,CAAC,AACZ,qBAAqB,CAAE,iBAAiB,CACxC,oBAAoB,CAAE,eAAe,CACrC,oBAAoB,CAAE,eAAe,CACrC,YAAY,CAAE,kBAAkB,CAChC,aAAa,CAAE,iBAAiB,AAEpC,CAAC,AACO,UAAU,AAAE,CAAC,AACjB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,SAAS,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAC9C,mBAAmB,CAAE,IAAI,AAC7B,CAAC,AACO,IAAI,AAAE,CAAC,AACX,UAAU,CAAE,IAAI,oBAAoB,CAAC,CACrC,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,IAAI,WAAW,CAAC,CAClC,eAAe,CAAE,KAAK,CACtB,iBAAiB,CAAE,SAAS,CAC5B,MAAM,CAAE,CAAC,AACb,CAAC,AACO,SAAS,AAAE,CAAC,AAChB,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,SAAS,CAAC,CAAC,aAAa,CAAC,CAAC,OAAO,CAC9C,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,IAAI,AACzB,CAAC,AAEO,YAAY,AAAE,CAAC,AACnB,OAAO,CAAE,IAAI,CAAC,UAAU,AAC5B,CAAC,AAED,GAAG,cAAC,CAAC,AACD,OAAO,CAAE,IAAI,AACjB,CAAC"}`
  };
  var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$b);
    return `${$$result.head += `${$$result.title = `<title>The Portfolio of Dani Bednarski - danibednarski.com</title>`, ""}<meta name="${"description"}" content="${"The portfolio website of Dani Bednarski. My name is Dani and I'm a web developer based in Melbourne, Australia.\n        What motivates me is making things that people love to use, and want to share with others.\n        Please explore the site, check out some of the projects that I have worked on, and reach out if you like what you see."}" data-svelte="svelte-4zhecz"><html lang="${"en"}" data-svelte="svelte-4zhecz"></html><link rel="${"apple-touch-icon"}" sizes="${"180x180"}" href="${"/apple-touch-icon.png"}" data-svelte="svelte-4zhecz"><link rel="${"icon"}" type="${"image/png"}" sizes="${"32x32"}" href="${"/favicon-32x32.png"}" data-svelte="svelte-4zhecz"><link rel="${"icon"}" type="${"image/png"}" sizes="${"16x16"}" href="${"/favicon-16x16.png"}" data-svelte="svelte-4zhecz"><link rel="${"manifest"}" href="${"/site.webmanifest"}" data-svelte="svelte-4zhecz">`, ""}



    <div class="${"svelte-efzzu1"}">${validate_component(AppBar, "AppBar").$$render($$result, {}, {}, {})}
        <div class="${"svelte-efzzu1"}">${validate_component(AppMenu, "AppMenu").$$render($$result, {}, {}, {
      default: () => `${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
                ${validate_component(AppMenuItem, "AppMenuItem").$$render($$result, {
        href: "/resume",
        text: "Resume",
        internal: true
      }, {}, {})}
                ${validate_component(AppMenuItem, "AppMenuItem").$$render($$result, {
        href: "https://github.com/danibedz",
        text: "GitHub",
        target: "_blank",
        rel: "noreferrer",
        icon: faExternalLinkAlt
      }, {}, {})}
                ${validate_component(AppMenuItem, "AppMenuItem").$$render($$result, {
        href: "https://www.linkedin.com/in/danibednarski/",
        text: "LinkedIn",
        target: "_blank",
        rel: "noreferrer",
        icon: faExternalLinkAlt
      }, {}, {})}
                ${validate_component(AppMenuItem, "AppMenuItem").$$render($$result, {
        href: "/contact",
        text: "Contact",
        internal: true
      }, {}, {})}`
    })}</div>
        ${slots.default ? slots.default({}) : ``}
    </div>`;
  });
  var __layout = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _layout
  });
  var css$a = {
    code: "div.svelte-1nxnt6h{display:grid;margin:auto;margin-top:40vh}h1.svelte-1nxnt6h{font-size:2rem}",
    map: '{"version":3,"file":"__error.svelte","sources":["__error.svelte"],"sourcesContent":["<script context=\\"module\\">\\n    export function load({ error, status }) {\\n        return {\\n            props: {\\n                error,\\n                status,\\n            },\\n        };\\n    }\\n<\/script>\\n\\n<script>\\n    export let error;\\n    export let status;\\n<\/script>\\n\\n<div>\\n    <h1>Error - Something bad happened \u{1F92D}</h1>\\n    <h3>{ error.message[0].toUpperCase() + error.message.slice(1, error.message.length) }</h3>\\n    <h3>Status Code: { status }</h3>\\n    <slot />\\n</div>\\n\\n<style>\\n    div {\\n        display: grid;\\n        margin: auto;\\n        margin-top: 40vh;\\n    }\\n    h1 {\\n        font-size: 2rem;\\n    }\\n</style>"],"names":[],"mappings":"AAwBI,GAAG,eAAC,CAAC,AACD,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,AACpB,CAAC,AACD,EAAE,eAAC,CAAC,AACA,SAAS,CAAE,IAAI,AACnB,CAAC"}'
  };
  function load$1({ error: error2, status }) {
    return { props: { error: error2, status } };
  }
  var _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { error: error2 } = $$props;
    let { status } = $$props;
    if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
      $$bindings.error(error2);
    if ($$props.status === void 0 && $$bindings.status && status !== void 0)
      $$bindings.status(status);
    $$result.css.add(css$a);
    return `<div class="${"svelte-1nxnt6h"}"><h1 class="${"svelte-1nxnt6h"}">Error - Something bad happened \u{1F92D}</h1>
    <h3>${escape(error2.message[0].toUpperCase() + error2.message.slice(1, error2.message.length))}</h3>
    <h3>Status Code: ${escape(status)}</h3>
    ${slots.default ? slots.default({}) : ``}
</div>`;
  });
  var __error = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _error,
    load: load$1
  });
  var css$9 = {
    code: "div.svelte-102a7cu{margin-top:40%;margin-left:3rem;width:calc(35vw + 1.5rem);-webkit-user-select:none;-moz-user-select:none}h1.svelte-102a7cu{color:var(--color-primary-light);font-size:3rem}p.svelte-102a7cu{margin-top:2rem;margin-bottom:1rem;color:var(--color-text);font-size:calc(1vw + 0.5rem)}a.svelte-102a7cu{color:var(--color-primary-light);font-size:calc(1vw + 0.5rem)}img.svelte-102a7cu{width:calc(25rem + 20vw);display:flex;margin:auto;position:fixed;bottom:0;right:0}",
    map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n    import { drag } from '$lib/drag';\\n<\/script>\\n\\n<main>\\n    <div use:drag>\\n        <h1>Ahoy!</h1>\\n        <p>My name is Dani and I'm a web developer based in Melbourne, Australia.</p>\\n        <p>What motivates me is making things that people love to use, and want to share with others.</p>\\n        <p>Please explore the site, check out some of the projects that I have worked on, and <a href=\\"/contact\\">reach out</a> if you like what you see.</p>\\n    </div>\\n        <img use:drag src=\\"/coding.svg\\" alt=\\"coder\\" draggable=\\"false\\" />\\n</main>\\n<slot />\\n\\n<style>\\n    div {\\n        margin-top: 40%;\\n        margin-left: 3rem;\\n        width: calc(35vw + 1.5rem);\\n        -webkit-user-select: none;\\n        -moz-user-select: none;\\n    }\\n    h1 {\\n        color: var(--color-primary-light);\\n        font-size: 3rem;\\n    }\\n    p {\\n        margin-top: 2rem;\\n        margin-bottom: 1rem;\\n        color: var(--color-text);\\n        font-size: calc(1vw + 0.5rem);\\n    }\\n\\n    a {\\n        color: var(--color-primary-light);\\n        font-size: calc(1vw + 0.5rem);\\n    }\\n\\n    img {\\n        width: calc(25rem + 20vw);\\n        display: flex;\\n        margin: auto;\\n        position: fixed;\\n        bottom: 0;\\n        right: 0;\\n    }\\n</style>"],"names":[],"mappings":"AAgBI,GAAG,eAAC,CAAC,AACD,UAAU,CAAE,GAAG,CACf,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,MAAM,CAAC,CAC1B,mBAAmB,CAAE,IAAI,CACzB,gBAAgB,CAAE,IAAI,AAC1B,CAAC,AACD,EAAE,eAAC,CAAC,AACA,KAAK,CAAE,IAAI,qBAAqB,CAAC,CACjC,SAAS,CAAE,IAAI,AACnB,CAAC,AACD,CAAC,eAAC,CAAC,AACC,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,AACjC,CAAC,AAED,CAAC,eAAC,CAAC,AACC,KAAK,CAAE,IAAI,qBAAqB,CAAC,CACjC,SAAS,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,AACjC,CAAC,AAED,GAAG,eAAC,CAAC,AACD,KAAK,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,AACZ,CAAC"}`
  };
  var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$9);
    return `<main><div class="${"svelte-102a7cu"}"><h1 class="${"svelte-102a7cu"}">Ahoy!</h1>
        <p class="${"svelte-102a7cu"}">My name is Dani and I&#39;m a web developer based in Melbourne, Australia.</p>
        <p class="${"svelte-102a7cu"}">What motivates me is making things that people love to use, and want to share with others.</p>
        <p class="${"svelte-102a7cu"}">Please explore the site, check out some of the projects that I have worked on, and <a href="${"/contact"}" class="${"svelte-102a7cu"}">reach out</a> if you like what you see.</p></div>
        <img src="${"/coding.svg"}" alt="${"coder"}" draggable="${"false"}" class="${"svelte-102a7cu"}"></main>
${slots.default ? slots.default({}) : ``}`;
  });
  var index$2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": Routes
  });
  var _210$1 = "/_app/assets/210-28bdf8f3.avif";
  var __glob_20_0 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _210$1
  });
  var _211$1 = "/_app/assets/211-c555a31e.avif";
  var __glob_20_1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _211$1
  });
  var _212$1 = "/_app/assets/212-cecac751.avif";
  var __glob_20_2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _212$1
  });
  var bedzme0$1 = "/_app/assets/bedzme0-24ddc7ee.avif";
  var __glob_20_3 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": bedzme0$1
  });
  var bedzme1$1 = "/_app/assets/bedzme1-6c35c45a.avif";
  var __glob_20_4 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": bedzme1$1
  });
  var bedzme2$1 = "/_app/assets/bedzme2-10d8da27.avif";
  var __glob_20_5 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": bedzme2$1
  });
  var salestracker0$1 = "data:image/avif;base64,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";
  var __glob_20_6 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": salestracker0$1
  });
  var salestracker1$1 = "/_app/assets/salestracker1-d89f0060.avif";
  var __glob_20_7 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": salestracker1$1
  });
  var salestracker2$1 = "/_app/assets/salestracker2-33ea075e.avif";
  var __glob_20_8 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": salestracker2$1
  });
  var taskr0$1 = "/_app/assets/taskr0-f6e10c3e.avif";
  var __glob_20_9 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": taskr0$1
  });
  var taskr1$1 = "/_app/assets/taskr1-6af84883.avif";
  var __glob_20_10 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": taskr1$1
  });
  var taskr2$1 = "/_app/assets/taskr2-f3f0b9d5.avif";
  var __glob_20_11 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": taskr2$1
  });
  var thissite0$1 = "/_app/assets/thissite0-b9cdbf5b.avif";
  var __glob_20_12 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": thissite0$1
  });
  var thissite1$1 = "/_app/assets/thissite1-f7499dad.avif";
  var __glob_20_13 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": thissite1$1
  });
  var thissite2$1 = "/_app/assets/thissite2-88faa567.avif";
  var __glob_20_14 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": thissite2$1
  });
  var tictactoe0$1 = "/_app/assets/tictactoe0-11a36306.avif";
  var __glob_20_15 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": tictactoe0$1
  });
  var tictactoe1$1 = "data:image/avif;base64,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";
  var __glob_20_16 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": tictactoe1$1
  });
  var tictactoe2$1 = "/_app/assets/tictactoe2-698d1310.avif";
  var __glob_20_17 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": tictactoe2$1
  });
  var _210 = "/_app/assets/210-05b2fa60.png";
  var __glob_19_0 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _210
  });
  var _211 = "/_app/assets/211-984527bd.png";
  var __glob_19_1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _211
  });
  var _212 = "/_app/assets/212-a7c0053f.png";
  var __glob_19_2 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _212
  });
  var bedzme0 = "/_app/assets/bedzme0-ddb77022.png";
  var __glob_19_3 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": bedzme0
  });
  var bedzme1 = "/_app/assets/bedzme1-ec3db312.png";
  var __glob_19_4 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": bedzme1
  });
  var bedzme2 = "/_app/assets/bedzme2-07fb1a61.png";
  var __glob_19_5 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": bedzme2
  });
  var salestracker0 = "/_app/assets/salestracker0-92a154da.png";
  var __glob_19_6 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": salestracker0
  });
  var salestracker1 = "/_app/assets/salestracker1-5892d3c2.png";
  var __glob_19_7 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": salestracker1
  });
  var salestracker2 = "/_app/assets/salestracker2-bf99c6f5.png";
  var __glob_19_8 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": salestracker2
  });
  var taskr0 = "/_app/assets/taskr0-51d2b2ed.png";
  var __glob_19_9 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": taskr0
  });
  var taskr1 = "/_app/assets/taskr1-3a7234f9.png";
  var __glob_19_10 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": taskr1
  });
  var taskr2 = "/_app/assets/taskr2-d17d4fe5.png";
  var __glob_19_11 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": taskr2
  });
  var thissite0 = "/_app/assets/thissite0-ca99a830.png";
  var __glob_19_12 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": thissite0
  });
  var thissite1 = "/_app/assets/thissite1-5f13e801.png";
  var __glob_19_13 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": thissite1
  });
  var thissite2 = "/_app/assets/thissite2-ea040470.png";
  var __glob_19_14 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": thissite2
  });
  var tictactoe0 = "/_app/assets/tictactoe0-8a149e66.png";
  var __glob_19_15 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": tictactoe0
  });
  var tictactoe1 = "/_app/assets/tictactoe1-6bcc97df.png";
  var __glob_19_16 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": tictactoe1
  });
  var tictactoe2 = "/_app/assets/tictactoe2-48e6bab1.png";
  var __glob_19_17 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": tictactoe2
  });
  var css$8 = {
    code: "#screenshots.svelte-1bu43fg{height:calc((60vw / 16) * 9);width:60vw;-webkit-user-drag:none;cursor:pointer;margin:2rem auto 1rem auto;padding-top:1.5rem;padding-bottom:0.25rem}img.svelte-1bu43fg{height:100%;width:100%;object-fit:cover}.sc-carousel-progress__indicator{background-color:var(--color-primary-light) !important}.sc-carousel__pages-window{border-radius:0.5rem !important}.sc-carousel-arrow__circle{height:calc(2vw + 2rem) !important;width:calc(2vw + 2rem) !important}.sc-carousel-arrow__arrow{border:solid var(--color-text) !important;border-width:0 var(--sc-arrow-size) var(--sc-arrow-size) 0 !important}*{--sc-arrow-size:calc(0.4vw) !important}",
    map: `{"version":3,"file":"Carousel.svelte","sources":["Carousel.svelte"],"sourcesContent":["<script>\\n    import { onMount } from 'svelte';\\n\\n    export let screenshotData;\\n\\n    let Carousel;\\n\\n    onMount(async () => {\\n        const module = await import('svelte-carousel');\\n        Carousel = module.default;\\n    });\\n<\/script>\\n\\n<div id=\\"screenshots\\">\\n    {#key screenshotData}\\n        <svelte:component\\n            this={ Carousel }\\n            autoplay\\n            autoplayDuration={ 5000 }\\n            autoplayProgressVisible\\n            pauseOnFocus\\n        >\\n            {#each screenshotData as screenshot}\\n                <picture>\\n                    <source\\n                        type=\\"image/avif\\"\\n                        srcset={ screenshot.avifSrc }\\n                        alt=\\"project screenshot\\"\\n                        draggable=\\"false\\"\\n                    >\\n                    <img\\n                        type=\\"image/png\\"\\n                        src={ screenshot.pngSrc }\\n                        alt=\\"project screenshot\\"\\n                        on:click={ () => { window.open(screenshot.pngSrc); } }\\n                        draggable=\\"false\\"\\n                    >\\n                </picture>\\n            {/each}\\n        </svelte:component>\\n    {/key}\\n</div>\\n\\n<style>\\n    #screenshots {\\n        /* height: 100%; */\\n        height: calc((60vw / 16) * 9);\\n        width: 60vw;\\n        -webkit-user-drag: none;\\n        cursor: pointer;\\n        margin: 2rem auto 1rem auto;\\n\\n        padding-top: 1.5rem;\\n        padding-bottom: 0.25rem;\\n    }\\n\\n    img {\\n        height: 100%;\\n        width: 100%;\\n        object-fit: cover;\\n    }\\n\\n    :global(.sc-carousel-progress__indicator) {\\n        background-color: var(--color-primary-light) !important;\\n    }\\n\\n    :global(.sc-carousel__pages-window) {\\n        border-radius: 0.5rem !important;\\n    }\\n\\n    :global(.sc-carousel-arrow__circle) {\\n        height: calc(2vw + 2rem) !important;\\n        width: calc(2vw + 2rem) !important;\\n    }\\n    :global(.sc-carousel-arrow__arrow) {\\n        border: solid var(--color-text) !important;\\n        border-width: 0 var(--sc-arrow-size) var(--sc-arrow-size) 0 !important;\\n    }\\n    :global(*) {\\n        --sc-arrow-size: calc(0.4vw) !important;\\n    }\\n</style>"],"names":[],"mappings":"AA4CI,YAAY,eAAC,CAAC,AAEV,MAAM,CAAE,KAAK,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAC7B,KAAK,CAAE,IAAI,CACX,iBAAiB,CAAE,IAAI,CACvB,MAAM,CAAE,OAAO,CACf,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAE3B,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,OAAO,AAC3B,CAAC,AAED,GAAG,eAAC,CAAC,AACD,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,KAAK,AACrB,CAAC,AAEO,gCAAgC,AAAE,CAAC,AACvC,gBAAgB,CAAE,IAAI,qBAAqB,CAAC,CAAC,UAAU,AAC3D,CAAC,AAEO,0BAA0B,AAAE,CAAC,AACjC,aAAa,CAAE,MAAM,CAAC,UAAU,AACpC,CAAC,AAEO,0BAA0B,AAAE,CAAC,AACjC,MAAM,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,UAAU,CACnC,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,UAAU,AACtC,CAAC,AACO,yBAAyB,AAAE,CAAC,AAChC,MAAM,CAAE,KAAK,CAAC,IAAI,YAAY,CAAC,CAAC,UAAU,CAC1C,YAAY,CAAE,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CAAC,CAAC,UAAU,AAC1E,CAAC,AACO,CAAC,AAAE,CAAC,AACR,eAAe,CAAE,YAAY,UAAU,AAC3C,CAAC"}`
  };
  var Carousel_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { screenshotData } = $$props;
    if ($$props.screenshotData === void 0 && $$bindings.screenshotData && screenshotData !== void 0)
      $$bindings.screenshotData(screenshotData);
    $$result.css.add(css$8);
    return `<div id="${"screenshots"}" class="${"svelte-1bu43fg"}">${validate_component(missing_component, "svelte:component").$$render($$result, {
      autoplay: true,
      autoplayDuration: 5e3,
      autoplayProgressVisible: true,
      pauseOnFocus: true
    }, {}, {
      default: () => `${each(screenshotData, (screenshot) => `<picture><source type="${"image/avif"}"${add_attribute("srcset", screenshot.avifSrc, 0)} alt="${"project screenshot"}" draggable="${"false"}">
                    <img type="${"image/png"}"${add_attribute("src", screenshot.pngSrc, 0)} alt="${"project screenshot"}" draggable="${"false"}" class="${"svelte-1bu43fg"}">
                </picture>`)}`
    })}
</div>`;
  });
  var css$7 = {
    code: ".pill.svelte-1cfvwnf{width:min-content;color:var(--color-primary-dark);background:var(--color-primary-light);font-size:calc(1vw + 0.5rem);margin:0.3rem;padding:0.3rem 1.5rem;border:0.25rem solid var(--color-text);border-radius:50px;white-space:nowrap}.pill.svelte-1cfvwnf:hover{cursor:default}",
    map: '{"version":3,"file":"Pill.svelte","sources":["Pill.svelte"],"sourcesContent":["<script>\\n    export let text;\\n<\/script>\\n\\n<div class=\\"pill\\">\\n    { text }\\n</div>\\n\\n<style>\\n    .pill {\\n        width: min-content;\\n        color: var(--color-primary-dark);\\n        background: var(--color-primary-light);\\n        font-size: calc(1vw + 0.5rem);\\n        margin: 0.3rem;\\n        padding: 0.3rem 1.5rem;\\n        border: 0.25rem solid var(--color-text);\\n        border-radius: 50px;\\n        white-space: nowrap;\\n    }\\n\\n    .pill:hover {\\n        cursor: default;\\n    }\\n</style>"],"names":[],"mappings":"AASI,KAAK,eAAC,CAAC,AACH,KAAK,CAAE,WAAW,CAClB,KAAK,CAAE,IAAI,oBAAoB,CAAC,CAChC,UAAU,CAAE,IAAI,qBAAqB,CAAC,CACtC,SAAS,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CAC7B,MAAM,CAAE,MAAM,CACd,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,MAAM,CAAE,OAAO,CAAC,KAAK,CAAC,IAAI,YAAY,CAAC,CACvC,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,MAAM,AACvB,CAAC,AAED,oBAAK,MAAM,AAAC,CAAC,AACT,MAAM,CAAE,OAAO,AACnB,CAAC"}'
  };
  var Pill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { text } = $$props;
    if ($$props.text === void 0 && $$bindings.text && text !== void 0)
      $$bindings.text(text);
    $$result.css.add(css$7);
    return `<div class="${"pill svelte-1cfvwnf"}">${escape(text)}
</div>`;
  });
  var css$6 = {
    code: "#description.svelte-x7cdh0{font-size:calc(1vw + 0.5rem);color:var(--color-text);margin:0.5rem 2rem}p.svelte-x7cdh0{padding:1rem}",
    map: '{"version":3,"file":"ProjectDescription.svelte","sources":["ProjectDescription.svelte"],"sourcesContent":["<script>\\n    export let descriptionData;\\n<\/script>\\n\\n<div id=\\"description\\">\\n    {#each descriptionData as paragraph}\\n        <p>\\n            { paragraph }\\n        </p>\\n    {/each}\\n</div>\\n\\n<style>\\n    #description {\\n        font-size: calc(1vw + 0.5rem);\\n        color: var(--color-text);\\n        margin: 0.5rem 2rem;\\n    }\\n    p {\\n        padding: 1rem;\\n    }\\n</style>"],"names":[],"mappings":"AAaI,YAAY,cAAC,CAAC,AACV,SAAS,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CAC7B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,MAAM,CAAE,MAAM,CAAC,IAAI,AACvB,CAAC,AACD,CAAC,cAAC,CAAC,AACC,OAAO,CAAE,IAAI,AACjB,CAAC"}'
  };
  var ProjectDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { descriptionData } = $$props;
    if ($$props.descriptionData === void 0 && $$bindings.descriptionData && descriptionData !== void 0)
      $$bindings.descriptionData(descriptionData);
    $$result.css.add(css$6);
    return `<div id="${"description"}" class="${"svelte-x7cdh0"}">${each(descriptionData, (paragraph) => `<p class="${"svelte-x7cdh0"}">${escape(paragraph)}
        </p>`)}
</div>`;
  });
  var css$5 = {
    code: "div.svelte-hoa4zs{color:var(--color-primary-light);font-size:calc(1vw + 2.5rem);text-align:left;margin-left:3rem}",
    map: '{"version":3,"file":"ProjectHeader.svelte","sources":["ProjectHeader.svelte"],"sourcesContent":["<script>\\n    export let projectNameData;\\n<\/script>\\n\\n<div>\\n    { projectNameData }\\n</div>\\n\\n<style>\\n    div {\\n        color: var(--color-primary-light);\\n        font-size: calc(1vw + 2.5rem);\\n        text-align: left;\\n        margin-left: 3rem;\\n    }\\n</style>"],"names":[],"mappings":"AASI,GAAG,cAAC,CAAC,AACD,KAAK,CAAE,IAAI,qBAAqB,CAAC,CACjC,SAAS,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,MAAM,CAAC,CAC7B,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,IAAI,AACrB,CAAC"}'
  };
  var ProjectHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { projectNameData } = $$props;
    if ($$props.projectNameData === void 0 && $$bindings.projectNameData && projectNameData !== void 0)
      $$bindings.projectNameData(projectNameData);
    $$result.css.add(css$5);
    return `<div class="${"svelte-hoa4zs"}">${escape(projectNameData)}
</div>`;
  });
  var css$4 = {
    code: "h2.svelte-1uohm2b{color:var(--color-primary-light);font-size:calc(1vw + 1rem);text-align:left;margin-left:3rem}",
    map: '{"version":3,"file":"ProjectTitle.svelte","sources":["ProjectTitle.svelte"],"sourcesContent":["<script>\\n    export let titleData;\\n\\n<\/script>\\n\\n<h2>\\n    { titleData }\\n</h2>\\n\\n<style>\\n    h2 {\\n        color: var(--color-primary-light);\\n        font-size: calc(1vw + 1rem);\\n        text-align: left;\\n        margin-left: 3rem;\\n    }\\n</style>"],"names":[],"mappings":"AAUI,EAAE,eAAC,CAAC,AACA,KAAK,CAAE,IAAI,qBAAqB,CAAC,CACjC,SAAS,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAC3B,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,IAAI,AACrB,CAAC"}'
  };
  var ProjectTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { titleData } = $$props;
    if ($$props.titleData === void 0 && $$bindings.titleData && titleData !== void 0)
      $$bindings.titleData(titleData);
    $$result.css.add(css$4);
    return `<h2 class="${"svelte-1uohm2b"}">${escape(titleData)}
</h2>`;
  });
  var css$3 = {
    code: "#technologies-used.svelte-ept9uy{margin:0 2rem 1rem;padding:0.5rem 1rem 1rem}h2.svelte-ept9uy{color:var(--color-primary-light);font-size:calc(1vw + 1rem);text-align:left}#pill-container.svelte-ept9uy{display:flex;flex-wrap:wrap;padding:0.5rem 1rem;justify-content:center}",
    map: '{"version":3,"file":"TechnologiesUsed.svelte","sources":["TechnologiesUsed.svelte"],"sourcesContent":["<div id=\\"technologies-used\\">\\n    <h2>Technologies Used</h2>\\n    <div id=\\"pill-container\\">\\n        <slot/>\\n    </div>\\n</div>\\n\\n\\n<style>\\n    #technologies-used {\\n        margin: 0 2rem 1rem;\\n        padding: 0.5rem 1rem 1rem;\\n    }\\n\\n    h2 {\\n        color: var(--color-primary-light);\\n        font-size: calc(1vw + 1rem);\\n        text-align: left;\\n    }\\n\\n    #pill-container {\\n        display: flex;\\n        flex-wrap: wrap;\\n        padding: 0.5rem 1rem;\\n        justify-content: center;\\n    }\\n</style>"],"names":[],"mappings":"AASI,kBAAkB,cAAC,CAAC,AAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CACnB,OAAO,CAAE,MAAM,CAAC,IAAI,CAAC,IAAI,AAC7B,CAAC,AAED,EAAE,cAAC,CAAC,AACA,KAAK,CAAE,IAAI,qBAAqB,CAAC,CACjC,SAAS,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAC3B,UAAU,CAAE,IAAI,AACpB,CAAC,AAED,eAAe,cAAC,CAAC,AACb,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,eAAe,CAAE,MAAM,AAC3B,CAAC"}'
  };
  var TechnologiesUsed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$3);
    return `<div id="${"technologies-used"}" class="${"svelte-ept9uy"}"><h2 class="${"svelte-ept9uy"}">Technologies Used</h2>
    <div id="${"pill-container"}" class="${"svelte-ept9uy"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
  });
  function __variableDynamicImportRuntime0__(path) {
    switch (path) {
      case "../../markdown/21.md":
        return Promise.resolve().then(function() {
          return _21$1;
        });
      case "../../markdown/bedzme.md":
        return Promise.resolve().then(function() {
          return bedzme;
        });
      case "../../markdown/salestracker.md":
        return Promise.resolve().then(function() {
          return salestracker;
        });
      case "../../markdown/taskr.md":
        return Promise.resolve().then(function() {
          return taskr;
        });
      case "../../markdown/thissite.md":
        return Promise.resolve().then(function() {
          return thissite;
        });
      case "../../markdown/tictactoe.md":
        return Promise.resolve().then(function() {
          return tictactoe;
        });
      default:
        return new Promise(function(resolve2, reject) {
          (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
        });
    }
  }
  var css$2 = {
    code: "main.svelte-1uw12di{display:flex;height:100%}article.svelte-1uw12di{position:static;height:100%}",
    map: `{"version":3,"file":"__layout.reset.svelte","sources":["__layout.reset.svelte"],"sourcesContent":["<svelte:head>\\n\\t<title>The Portfolio of Dani Bednarski - danibednarski.com</title>\\n\\t<meta name=\\"description\\" content=\\"The portfolio website of Dani Bednarski. My name is Dani and I'm a web developer based in Melbourne, Australia.\\n        What motivates me is making things that people love to use, and want to share with others.\\n        Please explore the site, check out some of the projects that I have worked on, and reach out if you like what you see.\\" />\\n\\t<html lang=\\"en\\" />\\n</svelte:head>\\n\\n<script context=\\"module\\">\\n    export async function load( { page } ) {\\n        const screenshotsPng = Object.values(import.meta.globEager('/static/projects/**/*.png'))\\n            .filter((path) => path.default.includes(page.params.slug));\\n        let pngPaths = screenshotsPng.map((path) => path.default);\\n\\n        const screenshotsAvif = Object.values(import.meta.globEager('/static/projects/**/*.avif'))\\n            .filter((path) => path.default.includes(page.params.slug));\\n        let avifPaths = screenshotsAvif.map((path) => path.default);\\n\\n        const screenshotData = [];\\n\\n        for (let i = 0; i < pngPaths.length; i++) {\\n            const entry = {\\n                id: i,\\n                pngSrc: pngPaths[i],\\n            };\\n            for (let j = 0; j < avifPaths.length; j++) {\\n                if (avifPaths[j].includes(\`\${ page.params.slug }\${ i }\`)) {\\n                    entry.avifSrc = avifPaths[j];\\n                }\\n            }\\n            screenshotData.push(entry);\\n        }\\n\\n        const project = (await import(\`../../markdown/\${ page.params.slug }.md\`));\\n        return {\\n            props: {\\n                descriptionData: project.metadata.description,\\n                github: project.metadata.github,\\n                liveSite: project.metadata.liveSite,\\n                projectNameData: project.metadata.projectName,\\n                screenshotData,\\n                technologiesUsed: project.metadata.technologiesUsed,\\n                titleData: project.metadata.title,\\n            },\\n        };\\n    }\\n<\/script>\\n\\n<script>\\n    import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';\\n    import { fly } from 'svelte/transition';\\n\\n    import AppBar from '$lib/AppBar.svelte';\\n    import AppMenu from '$lib/AppMenu.svelte';\\n    import AppMenuItem from '$lib/AppMenuItem.svelte';\\n    import Carousel from '$lib/Carousel.svelte';\\n    import Logo from '$lib/Logo.svelte';\\n    import Pill from '$lib/Pill.svelte';\\n    import ProjectDescription from '$lib/ProjectDescription.svelte';\\n    import ProjectHeader from '$lib/ProjectHeader.svelte';\\n    import ProjectTitle from '$lib/ProjectTitle.svelte';\\n    import TechnologiesUsed from '$lib/TechnologiesUsed.svelte';\\n\\n    export let descriptionData;\\n    export let github;\\n    export let liveSite;\\n    export let projectNameData;\\n    export let screenshotData;\\n    export let technologiesUsed;\\n    export let titleData;\\n<\/script>\\n\\n<main>\\n    <AppBar />\\n        <div in:fly|local={{ x: -400, duration: 600 }}>\\n            <AppMenu>\\n                <Logo />\\n                <AppMenuItem href=\\"#screenshots\\" text=\\"Screenshots\\" />\\n                <AppMenuItem href=\\"#description\\" text=\\"Description\\" />\\n                <AppMenuItem href=\\"#technologies-used\\" text=\\"Technologies used\\" />\\n                <AppMenuItem href={ liveSite } text=\\"Live Site\\" icon={ faExternalLinkAlt } target=\\"_blank\\" rel=\\"noreferrer\\" />\\n                <AppMenuItem href={ github } text=\\"GitHub\\" icon={ faExternalLinkAlt } target=\\"_blank\\" rel=\\"noreferrer\\" />\\n            </AppMenu>\\n        </div>\\n    <article>\\n        <Carousel { screenshotData } />\\n        <ProjectHeader { projectNameData } />\\n        <ProjectTitle { titleData } />\\n        <ProjectDescription { descriptionData } />\\n        <TechnologiesUsed>\\n            {#each technologiesUsed as technology}\\n                <Pill text={ technology } />\\n            {/each}\\n        </TechnologiesUsed>\\n    </article>\\n    <slot/>\\n</main>\\n\\n<style>\\n    main {\\n        display: flex;\\n        height: 100%;\\n    }\\n\\n    article {\\n        position: static;\\n        height: 100%;\\n    }\\n</style>"],"names":[],"mappings":"AAmGI,IAAI,eAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,AAChB,CAAC,AAED,OAAO,eAAC,CAAC,AACL,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,IAAI,AAChB,CAAC"}`
  };
  async function load({ page }) {
    const screenshotsPng = Object.values({ "/static/projects/21/210.png": __glob_19_0, "/static/projects/21/211.png": __glob_19_1, "/static/projects/21/212.png": __glob_19_2, "/static/projects/bedzme/bedzme0.png": __glob_19_3, "/static/projects/bedzme/bedzme1.png": __glob_19_4, "/static/projects/bedzme/bedzme2.png": __glob_19_5, "/static/projects/salestracker/salestracker0.png": __glob_19_6, "/static/projects/salestracker/salestracker1.png": __glob_19_7, "/static/projects/salestracker/salestracker2.png": __glob_19_8, "/static/projects/taskr/taskr0.png": __glob_19_9, "/static/projects/taskr/taskr1.png": __glob_19_10, "/static/projects/taskr/taskr2.png": __glob_19_11, "/static/projects/thissite/thissite0.png": __glob_19_12, "/static/projects/thissite/thissite1.png": __glob_19_13, "/static/projects/thissite/thissite2.png": __glob_19_14, "/static/projects/tictactoe/tictactoe0.png": __glob_19_15, "/static/projects/tictactoe/tictactoe1.png": __glob_19_16, "/static/projects/tictactoe/tictactoe2.png": __glob_19_17 }).filter((path) => path.default.includes(page.params.slug));
    let pngPaths = screenshotsPng.map((path) => path.default);
    const screenshotsAvif = Object.values({ "/static/projects/21/210.avif": __glob_20_0, "/static/projects/21/211.avif": __glob_20_1, "/static/projects/21/212.avif": __glob_20_2, "/static/projects/bedzme/bedzme0.avif": __glob_20_3, "/static/projects/bedzme/bedzme1.avif": __glob_20_4, "/static/projects/bedzme/bedzme2.avif": __glob_20_5, "/static/projects/salestracker/salestracker0.avif": __glob_20_6, "/static/projects/salestracker/salestracker1.avif": __glob_20_7, "/static/projects/salestracker/salestracker2.avif": __glob_20_8, "/static/projects/taskr/taskr0.avif": __glob_20_9, "/static/projects/taskr/taskr1.avif": __glob_20_10, "/static/projects/taskr/taskr2.avif": __glob_20_11, "/static/projects/thissite/thissite0.avif": __glob_20_12, "/static/projects/thissite/thissite1.avif": __glob_20_13, "/static/projects/thissite/thissite2.avif": __glob_20_14, "/static/projects/tictactoe/tictactoe0.avif": __glob_20_15, "/static/projects/tictactoe/tictactoe1.avif": __glob_20_16, "/static/projects/tictactoe/tictactoe2.avif": __glob_20_17 }).filter((path) => path.default.includes(page.params.slug));
    let avifPaths = screenshotsAvif.map((path) => path.default);
    const screenshotData = [];
    for (let i2 = 0; i2 < pngPaths.length; i2++) {
      const entry = { id: i2, pngSrc: pngPaths[i2] };
      for (let j2 = 0; j2 < avifPaths.length; j2++) {
        if (avifPaths[j2].includes(`${page.params.slug}${i2}`)) {
          entry.avifSrc = avifPaths[j2];
        }
      }
      screenshotData.push(entry);
    }
    const project = await __variableDynamicImportRuntime0__(`../../markdown/${page.params.slug}.md`);
    return {
      props: {
        descriptionData: project.metadata.description,
        github: project.metadata.github,
        liveSite: project.metadata.liveSite,
        projectNameData: project.metadata.projectName,
        screenshotData,
        technologiesUsed: project.metadata.technologiesUsed,
        titleData: project.metadata.title
      }
    };
  }
  var _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let { descriptionData } = $$props;
    let { github: github2 } = $$props;
    let { liveSite } = $$props;
    let { projectNameData } = $$props;
    let { screenshotData } = $$props;
    let { technologiesUsed } = $$props;
    let { titleData } = $$props;
    if ($$props.descriptionData === void 0 && $$bindings.descriptionData && descriptionData !== void 0)
      $$bindings.descriptionData(descriptionData);
    if ($$props.github === void 0 && $$bindings.github && github2 !== void 0)
      $$bindings.github(github2);
    if ($$props.liveSite === void 0 && $$bindings.liveSite && liveSite !== void 0)
      $$bindings.liveSite(liveSite);
    if ($$props.projectNameData === void 0 && $$bindings.projectNameData && projectNameData !== void 0)
      $$bindings.projectNameData(projectNameData);
    if ($$props.screenshotData === void 0 && $$bindings.screenshotData && screenshotData !== void 0)
      $$bindings.screenshotData(screenshotData);
    if ($$props.technologiesUsed === void 0 && $$bindings.technologiesUsed && technologiesUsed !== void 0)
      $$bindings.technologiesUsed(technologiesUsed);
    if ($$props.titleData === void 0 && $$bindings.titleData && titleData !== void 0)
      $$bindings.titleData(titleData);
    $$result.css.add(css$2);
    return `${$$result.head += `${$$result.title = `<title>The Portfolio of Dani Bednarski - danibednarski.com</title>`, ""}<meta name="${"description"}" content="${"The portfolio website of Dani Bednarski. My name is Dani and I'm a web developer based in Melbourne, Australia.\n        What motivates me is making things that people love to use, and want to share with others.\n        Please explore the site, check out some of the projects that I have worked on, and reach out if you like what you see."}" data-svelte="svelte-hyzfuk"><html lang="${"en"}" data-svelte="svelte-hyzfuk"></html>`, ""}





<main class="${"svelte-1uw12di"}">${validate_component(AppBar, "AppBar").$$render($$result, {}, {}, {})}
        <div>${validate_component(AppMenu, "AppMenu").$$render($$result, {}, {}, {
      default: () => `${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
                ${validate_component(AppMenuItem, "AppMenuItem").$$render($$result, {
        href: "#screenshots",
        text: "Screenshots"
      }, {}, {})}
                ${validate_component(AppMenuItem, "AppMenuItem").$$render($$result, {
        href: "#description",
        text: "Description"
      }, {}, {})}
                ${validate_component(AppMenuItem, "AppMenuItem").$$render($$result, {
        href: "#technologies-used",
        text: "Technologies used"
      }, {}, {})}
                ${validate_component(AppMenuItem, "AppMenuItem").$$render($$result, {
        href: liveSite,
        text: "Live Site",
        icon: faExternalLinkAlt,
        target: "_blank",
        rel: "noreferrer"
      }, {}, {})}
                ${validate_component(AppMenuItem, "AppMenuItem").$$render($$result, {
        href: github2,
        text: "GitHub",
        icon: faExternalLinkAlt,
        target: "_blank",
        rel: "noreferrer"
      }, {}, {})}`
    })}</div>
    <article class="${"svelte-1uw12di"}">${validate_component(Carousel_1, "Carousel").$$render($$result, { screenshotData }, {}, {})}
        ${validate_component(ProjectHeader, "ProjectHeader").$$render($$result, { projectNameData }, {}, {})}
        ${validate_component(ProjectTitle, "ProjectTitle").$$render($$result, { titleData }, {}, {})}
        ${validate_component(ProjectDescription, "ProjectDescription").$$render($$result, { descriptionData }, {}, {})}
        ${validate_component(TechnologiesUsed, "TechnologiesUsed").$$render($$result, {}, {}, {
      default: () => `${each(technologiesUsed, (technology) => `${validate_component(Pill, "Pill").$$render($$result, { text: technology }, {}, {})}`)}`
    })}</article>
    ${slots.default ? slots.default({}) : ``}
</main>`;
  });
  var __layout_reset = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _layout_reset,
    load
  });
  var U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return `${slots.default ? slots.default({}) : ``}`;
  });
  var _slug_ = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": U5Bslugu5D
  });
  function n(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function r(e) {
    return Object.keys(e || {}).reduce((t, i2) => Object.assign(Object.assign({}, t), { [i2]: n(e[i2]) ? r(e[i2]) : Array.isArray(e[i2]) ? [...e[i2]] : e[i2] }), {});
  }
  function i(e, t) {
    return function(e2, t2) {
      return Object.keys(e2).reduce((n2, r2) => Object.assign(Object.assign({}, n2), { [r2]: t2(e2[r2]) }), {});
    }(e, (e2) => n(e2) ? i(e2, t) : Array.isArray(e2) ? e2.map(function(e3) {
      return function(t2) {
        return n(t2) ? i(t2, e3) : e3;
      };
    }(t)) : t);
  }
  function o(...e) {
    const t = e.pop(), a2 = r(e.shift());
    if (e.length === 0)
      return a2;
    for (const u2 of e) {
      if (!u2)
        continue;
      const e2 = Object.keys(u2);
      for (const c2 of e2) {
        const e3 = t(a2[c2], u2[c2]);
        if (e3 !== void 0)
          a2[c2] = e3;
        else if (n(u2[c2]) && n(a2[c2]))
          a2[c2] = o(a2[c2], u2[c2], t);
        else if (Array.isArray(u2[c2]))
          a2[c2] = u2[c2].map((e4, r2) => n(e4) ? o(Array.isArray(a2[c2]) ? a2[c2][r2] : a2[c2], e4, t) : e4);
        else if (n(u2[c2])) {
          const e4 = i(r(u2[c2]), void 0);
          a2[c2] = o(e4, u2[c2], t);
        } else
          u2[c2] !== void 0 && (a2[c2] = u2[c2]);
      }
    }
    return a2;
  }
  function a(e, t) {
    if (!n(e) || !n(t)) {
      if (Array.isArray(t)) {
        if (t.some(n))
          return;
        const r2 = Array.isArray(e) ? e : [];
        return t.map((e2, t2) => {
          var n2;
          return (n2 = r2[t2]) !== null && n2 !== void 0 ? n2 : e2;
        });
      }
      return e !== void 0 ? e : void 0;
    }
  }
  function u(...e) {
    return o(...e, a);
  }
  function c(...e) {
    return o(...e, () => {
    });
  }
  function l(e, t, n2) {
    const r2 = (n3) => String.prototype.split.call(t, n3).filter(Boolean).reduce((e2, t2) => e2 != null ? e2[t2] : e2, e), i2 = r2(/[,[\]]+?/) || r2(/[,[\].]+?/);
    return i2 === void 0 || i2 === e ? n2 : i2;
  }
  function s(e, t, n2) {
    Object(e) !== e ? e = {} : e !== void 0 && (e = r(e));
    let i2 = Array.isArray(t) ? t : t.toString().match(/[^.[\]]+/g) || [];
    return i2.slice(0, -1).reduce((e2, t2, n3) => Object(e2[t2]) === e2[t2] ? e2[t2] : e2[t2] = Math.abs(Number(i2[n3 + 1])) >> 0 == +i2[n3 + 1] ? [] : {}, e)[i2[i2.length - 1]] = n2, e;
  }
  function d(e, t) {
    var n2;
    if (Object(e) !== e)
      return;
    e !== void 0 && (e = r(e));
    let i2 = Array.isArray(t) ? t : t.toString().match(/[^.[\]]+/g) || [];
    return (n2 = i2.slice(0, -1).reduce((e2, t2) => Object(e2[t2]) === e2[t2] ? e2[t2] : void 0, e)) === null || n2 === void 0 || delete n2[i2[i2.length - 1]], e;
  }
  function f(e, t, n2) {
    Object(e) !== e && (e = {});
    let r2 = t.toString().match(/[^.[\]]+/g) || [];
    return r2.slice(0, -1).reduce((e2, t2, n3) => Object(e2[t2]) === e2[t2] ? e2[t2] : e2[t2] = Math.abs(Number(r2[n3 + 1])) >> 0 == +r2[n3 + 1] ? [] : {}, e)[r2[r2.length - 1]] = n2(l(e, t)), e;
  }
  function v(e, t) {
    return function(e2, t2) {
      return Object.keys(e2).some((n2) => t2(e2[n2]));
    }(e, (e2) => n(e2) ? v(e2, t) : t(e2));
  }
  function m(e) {
    return e.hasAttribute("data-felte-index") ? Number(e.dataset.felteIndex) : void 0;
  }
  function y(e) {
    var t;
    return ((t = e) === null || t === void 0 ? void 0 : t.nodeName) === "INPUT";
  }
  function b(e) {
    var t;
    return ((t = e) === null || t === void 0 ? void 0 : t.nodeName) === "SELECT";
  }
  function h(e) {
    var t;
    return ((t = e) === null || t === void 0 ? void 0 : t.nodeName) === "FIELDSET";
  }
  function p(e) {
    return y(e) || function(e2) {
      var t;
      return ((t = e2) === null || t === void 0 ? void 0 : t.nodeName) === "TEXTAREA";
    }(e) || b(e);
  }
  function g(e) {
    return e.nodeType === Node.ELEMENT_NODE;
  }
  function A(e, t) {
    const n2 = m(e);
    let r2 = "";
    t ? r2 = t : p(e) && (r2 = e.name), r2 = n2 === void 0 ? r2 : `${r2}[${n2}]`;
    let i2 = e.parentNode;
    if (!i2)
      return r2;
    for (; i2 && i2.nodeName !== "FORM"; ) {
      if (h(i2) && i2.name) {
        const e2 = m(i2);
        r2 = `${e2 === void 0 ? i2.name : `${i2.name}[${e2}]`}.${r2}`;
      }
      i2 = i2.parentNode;
    }
    return r2;
  }
  function E(e) {
    const t = e.dataset.felteFieldset, n2 = m(e), r2 = n2 === void 0 ? e.name : `${e.name}[${n2}]`;
    return t ? `${t}.${r2}` : r2;
  }
  function O(e) {
    let t = e;
    for (; t && t.nodeName !== "FORM"; ) {
      if (t.hasAttribute("data-felte-ignore"))
        return true;
      t = t.parentElement;
    }
    return false;
  }
  function S(e) {
    if (p(e))
      return [e];
    if (e.childElementCount === 0)
      return [];
    const t = new Set();
    for (const n2 of e.children) {
      if (p(n2) && t.add(n2), h(n2))
        for (const e2 of n2.elements)
          p(e2) && t.add(e2);
      n2.childElementCount > 0 && S(n2).forEach((e2) => t.add(e2));
    }
    return Array.from(t);
  }
  function j(e) {
    for (const t of e.elements)
      if (p(t) || h(t)) {
        if (e.name && t.name) {
          const n2 = m(e), r2 = n2 === void 0 ? e.name : `${e.name}[${n2}]`;
          t.dataset.felteFieldset = e.dataset.felteFieldset ? `${e.dataset.felteFieldset}.${r2}` : r2;
        }
        e.dataset.felteUnsetOnRemove !== "true" || t.hasAttribute("data-felte-unset-on-remove") || (t.dataset.felteUnsetOnRemove = "true");
      }
  }
  function N(e) {
    return e.type.match(/^(number|range)$/) ? e.value ? +e.value : void 0 : e.value;
  }
  function k(e) {
    var t;
    let n2 = {};
    for (const r2 of e.elements) {
      if (h(r2) && j(r2), !p(r2) || !r2.name)
        continue;
      const i2 = A(r2), o2 = m(r2);
      if (y(r2)) {
        if (r2.type === "checkbox") {
          if (l(n2, i2) === void 0) {
            if (Array.from(e.querySelectorAll(`[name="${r2.name}"]`)).filter((e2) => !!p(e2) && (o2 !== void 0 ? Number(e2.dataset.felteIndex) === o2 : i2 === A(e2))).length === 1) {
              n2 = s(n2, i2, r2.checked);
              continue;
            }
            n2 = s(n2, i2, r2.checked ? [r2.value] : []);
            continue;
          }
          Array.isArray(l(n2, i2)) && r2.checked && f(n2, i2, (e2) => (o2 === void 0 || Array.isArray(e2) || (e2 = []), [...e2, r2.value]));
          continue;
        }
        if (r2.type === "radio") {
          if (l(n2, i2))
            continue;
          n2 = s(n2, i2, r2.checked ? r2.value : void 0);
          continue;
        }
        if (r2.type === "file") {
          n2 = s(n2, i2, r2.multiple ? Array.from(r2.files || []) : (t = r2.files) === null || t === void 0 ? void 0 : t[0]);
          continue;
        }
      }
      const a2 = N(r2);
      n2 = s(n2, i2, a2);
    }
    return { defaultData: n2 };
  }
  function $(e, t) {
    if (!p(e))
      return;
    const n2 = t;
    if (y(e)) {
      if (e.type === "checkbox") {
        const t2 = n2;
        return t2 === void 0 || typeof t2 == "boolean" ? void (e.checked = !!t2) : void (Array.isArray(t2) && (t2.includes(e.value) ? e.checked = true : e.checked = false));
      }
      if (e.type === "radio") {
        const t2 = n2;
        return void (e.value === t2 ? e.checked = true : e.checked = false);
      }
      if (e.type === "file")
        return e.files = null, void (e.value = "");
    }
    e.value = String(n2 != null ? n2 : "");
  }
  function x(e, t) {
    for (const n2 of e.elements)
      h(n2) && j(n2), p(n2) && n2.name && $(n2, l(t, A(n2)));
  }
  function V(e, t) {
    if (!n(e) && !n(t)) {
      if (e === null)
        return t;
      if (t === null)
        return e;
      if (e && t)
        return Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]), [...e, ...t];
    }
  }
  async function L(e, t) {
    if (t)
      return Array.isArray(t) ? o(...await Promise.all(t.map((t2) => t2(e))), V) : t(e);
  }
  function T() {
  }
  function F(e) {
    let t;
    return function(e2, ...t2) {
      if (e2 == null)
        return T;
      const n2 = e2.subscribe(...t2);
      return n2.unsubscribe ? () => n2.unsubscribe() : n2;
    }(e, (e2) => t = e2)(), t;
  }
  function M({ stores: e, config: t, currentExtenders: n2, extender: o2, addValidator: a2 }) {
    var f2;
    const { isSubmitting: h2, data: j2, touched: V2, errors: T2 } = e;
    function M2(e2) {
      var r2, o3, a3;
      const u2 = (r2 = e2 == null ? void 0 : e2.onSubmit) !== null && r2 !== void 0 ? r2 : t.onSubmit, c2 = (o3 = e2 == null ? void 0 : e2.validate) !== null && o3 !== void 0 ? o3 : t.validate, l2 = (a3 = e2 == null ? void 0 : e2.onError) !== null && a3 !== void 0 ? a3 : t.onError;
      return async function(e3) {
        e3 == null || e3.preventDefault(), h2.set(true);
        const t2 = F(j2), r3 = await L(t2, c2);
        if (V2.update((e4) => i(e4, true)), r3 && (T2.set(r3), v(r3, (e4) => !!e4)))
          return n2.forEach((e4) => {
            var n3;
            return (n3 = e4 == null ? void 0 : e4.onSubmitError) === null || n3 === void 0 ? void 0 : n3.call(e4, { data: t2, errors: r3 });
          }), void h2.set(false);
        try {
          await u2(t2);
        } catch (e4) {
          if (!l2)
            throw e4;
          const r4 = l2(e4);
          r4 && (T2.set(r4), n2.forEach((e5) => {
            var n3;
            return (n3 = e5 == null ? void 0 : e5.onSubmitError) === null || n3 === void 0 ? void 0 : n3.call(e5, { data: t2, errors: r4 });
          }));
        } finally {
          h2.set(false);
        }
      };
    }
    function w2(e2, t2) {
      const n3 = t2 === void 0 ? e2 : `${e2}[${t2}]`;
      V2.update((e3) => s(e3, n3, true));
    }
    function D(e2) {
      j2.set(r(e2)), R && x(R, e2);
    }
    let R, I = (f2 = t.initialValues) !== null && f2 !== void 0 ? f2 : {};
    const U = M2();
    return { handleSubmit: U, createSubmitHandler: M2, reset: function() {
      D(r(I)), V2.update((e2) => i(e2, false));
    }, setTouched: w2, setError: function(e2, t2) {
      T2.update((n3) => s(n3, e2, t2));
    }, setField: function(e2, t2, n3 = true) {
      if (j2.update((n4) => s(n4, e2, t2)), n3 && w2(e2), R)
        for (const n4 of R.elements) {
          if (!p(n4) || !n4.name)
            continue;
          const r2 = A(n4);
          if (e2 === r2)
            return void $(n4, t2);
        }
    }, setFields: D, validate: async function() {
      const e2 = F(j2);
      V2.update((e3) => i(e3, true));
      const n3 = await L(e2, t.validate);
      return T2.set(n3 || {}), n3;
    }, form: function(e2) {
      function f3(n3) {
        return n3({ form: e2, controls: Array.from(e2.elements).filter(p), data: j2, errors: T2, touched: V2, config: t, addValidator: a2 });
      }
      n2 = o2.map(f3), e2.noValidate = !!t.validate;
      const { defaultData: v2 } = k(e2);
      function h3(e3) {
        var n3;
        const r2 = e3.target;
        if (!r2 || !p(r2) || b(r2) || O(r2))
          return;
        if (["checkbox", "radio", "file"].includes(r2.type))
          return;
        if (!r2.name)
          return;
        ((n3 = t.touchTriggerEvents) === null || n3 === void 0 ? void 0 : n3.input) && w2(A(r2));
        const i2 = N(r2);
        j2.update((e4) => s(e4, A(r2), i2));
      }
      function $2(n3) {
        var r2;
        const i2 = n3.target;
        i2 && p(i2) && !O(i2) && i2.name && (((r2 = t.touchTriggerEvents) === null || r2 === void 0 ? void 0 : r2.change) && w2(A(i2)), b(i2) && j2.update((e3) => s(e3, A(i2), i2.value)), y(i2) && (i2.type === "checkbox" && function(t2) {
          const n4 = m(t2), r3 = A(t2), i3 = Array.from(e2.querySelectorAll(`[name="${t2.name}"]`)).filter((e3) => !!p(e3) && (n4 !== void 0 ? Number(e3.dataset.felteIndex) === n4 : r3 === A(e3)));
          i3.length === 1 ? j2.update((e3) => s(e3, A(t2), t2.checked)) : j2.update((e3) => s(e3, A(t2), i3.filter(y).filter((e4) => e4.checked).map((e4) => e4.value)));
        }(i2), i2.type === "radio" && function(t2) {
          const n4 = e2.querySelectorAll(`[name="${t2.name}"]`), r3 = Array.from(n4).find((e3) => y(e3) && e3.checked);
          j2.update((e3) => s(e3, A(t2), r3 == null ? void 0 : r3.value));
        }(i2), i2.type === "file" && function(e3) {
          const t2 = e3.files;
          j2.update((n4) => s(n4, A(e3), e3.multiple ? Array.from(t2 != null ? t2 : []) : t2 == null ? void 0 : t2[0]));
        }(i2)));
      }
      function x2(e3) {
        var n3;
        const r2 = e3.target;
        r2 && p(r2) && !O(r2) && r2.name && ((n3 = t.touchTriggerEvents) === null || n3 === void 0 ? void 0 : n3.blur) && w2(A(r2));
      }
      function L2(e3) {
        for (const t2 of e3)
          t2.dataset.felteUnsetOnRemove === "true" && j2.update((e4) => d(e4, E(t2)));
      }
      R = e2, I = c(r(v2), I), D(I), V2.set(i(I, false));
      const F2 = new MutationObserver(function(t2) {
        for (const r2 of t2)
          if (r2.type === "childList") {
            if (r2.addedNodes.length > 0) {
              if (!Array.from(r2.addedNodes).some((e3) => !!g(e3) && (!!p(e3) || S(e3).length > 0)))
                continue;
              n2.forEach((e3) => {
                var t4;
                return (t4 = e3 == null ? void 0 : e3.destroy) === null || t4 === void 0 ? void 0 : t4.call(e3);
              }), n2 = o2.map(f3);
              const { defaultData: t3 } = k(e2), a3 = i(t3, false);
              j2.update((e3) => u(e3, t3)), V2.update((e3) => u(e3, a3));
            }
            if (r2.removedNodes.length > 0)
              for (const e3 of r2.removedNodes) {
                if (!g(e3))
                  continue;
                const t3 = S(e3);
                t3.length !== 0 && (n2.forEach((e4) => {
                  var t4;
                  return (t4 = e4 == null ? void 0 : e4.destroy) === null || t4 === void 0 ? void 0 : t4.call(e4);
                }), n2 = o2.map(f3), L2(t3));
              }
          }
      });
      F2.observe(e2, { childList: true, subtree: true }), e2.addEventListener("input", h3), e2.addEventListener("change", $2), e2.addEventListener("focusout", x2), e2.addEventListener("submit", U);
      const M3 = T2.subscribe((t2) => {
        for (const n3 of e2.elements) {
          if (!p(n3) || !n3.name)
            continue;
          const e3 = l(t2, A(n3)), r2 = Array.isArray(e3) ? e3.join("\n") : typeof e3 == "string" ? e3 : void 0;
          r2 !== n3.dataset.felteValidationMessage && (r2 ? n3.dataset.felteValidationMessage = r2 : delete n3.dataset.felteValidationMessage);
        }
      });
      return { destroy() {
        F2.disconnect(), e2.removeEventListener("input", h3), e2.removeEventListener("change", $2), e2.removeEventListener("focusout", x2), e2.removeEventListener("submit", U), M3(), n2.forEach((e3) => {
          var t2;
          return (t2 = e3 == null ? void 0 : e3.destroy) === null || t2 === void 0 ? void 0 : t2.call(e3);
        });
      } };
    } };
  }
  function w(a2) {
    return function(e, t) {
      var i2, a3;
      function u2(t2) {
        e.validate ? e.validate = [...e.validate, t2] : e.validate = [t2];
      }
      (i2 = e.extend) !== null && i2 !== void 0 || (e.extend = []), (a3 = e.touchTriggerEvents) !== null && a3 !== void 0 || (e.touchTriggerEvents = { change: true, blur: true }), e.validate && !Array.isArray(e.validate) && (e.validate = [e.validate]);
      const c2 = Array.isArray(e.extend) ? e.extend : [e.extend];
      let l2 = [];
      const { isSubmitting: s2, data: d2, errors: f2, touched: v2, isValid: m2 } = t.stores;
      l2 = c2.map((t2) => t2({ errors: f2, touched: v2, data: d2, config: e, addValidator: u2 }));
      const y2 = M({ currentExtenders: l2, extender: c2, config: e, addValidator: u2, stores: { data: d2, errors: f2, touched: v2, isValid: m2, isSubmitting: s2 } });
      function b2(e2, t2) {
        if (!n(e2))
          return e2 !== t2;
      }
      function h2(e2, t2) {
        if (!n(e2))
          return t2 || e2;
      }
      return Object.assign({ data: Object.assign(Object.assign({}, d2), { set: function(t2) {
        return v2.update((n2) => {
          const i3 = o(r(t2), e.initialValues, b2);
          return o(i3, n2, h2);
        }), d2.set(t2);
      } }), errors: f2, touched: v2, isValid: m2, isSubmitting: s2 }, y2);
    }(a2, { stores: function(a3) {
      const u2 = i(a3.initialValues || {}, false), c2 = writable(u2), l2 = writable(a3.initialValues ? r(a3.initialValues) : {}), s2 = writable({}, (e) => l2.subscribe(async function(t) {
        let n2 = {};
        a3.validate && t && (n2 = await L(t, a3.validate), e(n2 || {}));
      }));
      function d2(e, t) {
        if (!n(t)) {
          if (Array.isArray(t)) {
            if (t.some(n))
              return;
            const r2 = Array.isArray(e) ? e : [];
            return t.map((e2, t2) => e2 && r2[t2] || null);
          }
          return t && e || null;
        }
      }
      const { subscribe: f2 } = derived([s2, c2], ([e, t]) => o(e, t, d2));
      let m2 = false;
      const y2 = derived(s2, (e) => !a3.validate || (m2 ? !v(e, (e2) => !!e2) : (m2 = true, false)));
      return { touched: c2, isSubmitting: writable(false), isValid: y2, errors: { subscribe: f2, set: s2.set, update: s2.update }, data: l2 };
    }(a2) });
  }
  var css$1 = {
    code: "main.svelte-11msbfu{flex-grow:1}h1.svelte-11msbfu{color:var(--color-primary-grey);font-size:3rem;text-align:center;margin-top:5rem;margin-bottom:2.5rem}input.svelte-11msbfu,textarea.svelte-11msbfu{border:none;width:30rem;color:var(--color-primary-dark);display:flex;margin:1rem auto;padding:1rem;border-radius:0.375rem}textarea.svelte-11msbfu{height:10rem}input[type=submit].svelte-11msbfu{width:auto;padding:0.75rem 1.5rem;background:var(--color-primary-light);border:2px solid var(--color-primary-dark);color:var(--color-primary-dark)}input[type=submit].svelte-11msbfu:hover{color:var(--color-primary-light);border:2px solid var(--color-primary-light);background:var(--color-primary-dark)}",
    map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n    import emailjs from 'emailjs-com';\\n    import { createForm } from 'felte';\\n\\n    let buttonText = 'Send';\\n\\n    const { form, reset } = createForm({\\n        onSubmit: async (values) => {\\n            buttonText = 'Sending';\\n            emailjs.send('service_i47aoaq', 'template_aflqbbg', values, 'user_O8soHnleeJBxVzS3CBIrf').then(() => {\\n                buttonText = 'Sent';\\n                reset();\\n                setTimeout(() => {\\n                    buttonText = 'Send';\\n                }, 5000);\\n            }, (error) => {\\n                buttonText = 'Error';\\n                // eslint-disable-next-line no-console\\n                console.log(error);\\n            });\\n        },\\n    });\\n<\/script>\\n\\n<main>\\n    <h1>Contact Me</h1>\\n    <form use:form >\\n        <input type=\\"text\\" name=\\"from_name\\" placeholder=\\"From\\" required>\\n        <input type=\\"email\\" name=\\"email\\" placeholder=\\"Email\\" required>\\n        <textarea type=\\"text\\" name=\\"message\\" placeholder=\\"Message\\" required />\\n        <input type=\\"submit\\" value={ buttonText } />\\n    </form>\\n</main>\\n<slot />\\n\\n<style>\\n    main {\\n        flex-grow: 1;\\n    }\\n\\n    h1 {\\n        color: var(--color-primary-grey);\\n        font-size:3rem;\\n        text-align: center;\\n        margin-top: 5rem;\\n        margin-bottom: 2.5rem;\\n    }\\n\\n    input, textarea {\\n        border: none;\\n        width: 30rem;\\n        color: var(--color-primary-dark);\\n        display: flex;\\n        margin: 1rem auto;\\n        padding: 1rem;\\n        border-radius: 0.375rem;\\n    }\\n\\n    textarea {\\n        height: 10rem;\\n    }\\n\\n    input[type=submit] {\\n        width: auto;\\n        padding: 0.75rem 1.5rem;\\n        background: var(--color-primary-light);\\n        border: 2px solid var(--color-primary-dark);\\n        color: var(--color-primary-dark);\\n    }\\n    input[type=submit]:hover {\\n        color: var(--color-primary-light);\\n        border:2px solid var(--color-primary-light);\\n        background: var(--color-primary-dark);\\n    }\\n</style>"],"names":[],"mappings":"AAoCI,IAAI,eAAC,CAAC,AACF,SAAS,CAAE,CAAC,AAChB,CAAC,AAED,EAAE,eAAC,CAAC,AACA,KAAK,CAAE,IAAI,oBAAoB,CAAC,CAChC,UAAU,IAAI,CACd,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,MAAM,AACzB,CAAC,AAED,oBAAK,CAAE,QAAQ,eAAC,CAAC,AACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,KAAK,CACZ,KAAK,CAAE,IAAI,oBAAoB,CAAC,CAChC,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,QAAQ,AAC3B,CAAC,AAED,QAAQ,eAAC,CAAC,AACN,MAAM,CAAE,KAAK,AACjB,CAAC,AAED,KAAK,CAAC,IAAI,CAAC,MAAM,CAAC,eAAC,CAAC,AAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,OAAO,CAAC,MAAM,CACvB,UAAU,CAAE,IAAI,qBAAqB,CAAC,CACtC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,oBAAoB,CAAC,CAC3C,KAAK,CAAE,IAAI,oBAAoB,CAAC,AACpC,CAAC,AACD,KAAK,CAAC,IAAI,CAAC,MAAM,gBAAC,MAAM,AAAC,CAAC,AACtB,KAAK,CAAE,IAAI,qBAAqB,CAAC,CACjC,OAAO,GAAG,CAAC,KAAK,CAAC,IAAI,qBAAqB,CAAC,CAC3C,UAAU,CAAE,IAAI,oBAAoB,CAAC,AACzC,CAAC"}`
  };
  var Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let buttonText = "Send";
    const { form, reset } = w({
      onSubmit: async (values) => {
        buttonText = "Sending";
        es_default.send("service_i47aoaq", "template_aflqbbg", values, "user_O8soHnleeJBxVzS3CBIrf").then(() => {
          buttonText = "Sent";
          reset();
          setTimeout(() => {
            buttonText = "Send";
          }, 5e3);
        }, (error2) => {
          buttonText = "Error";
          console.log(error2);
        });
      }
    });
    $$result.css.add(css$1);
    return `<main class="${"svelte-11msbfu"}"><h1 class="${"svelte-11msbfu"}">Contact Me</h1>
    <form><input type="${"text"}" name="${"from_name"}" placeholder="${"From"}" required class="${"svelte-11msbfu"}">
        <input type="${"email"}" name="${"email"}" placeholder="${"Email"}" required class="${"svelte-11msbfu"}">
        <textarea type="${"text"}" name="${"message"}" placeholder="${"Message"}" required class="${"svelte-11msbfu"}"></textarea>
        <input type="${"submit"}"${add_attribute("value", buttonText, 0)} class="${"svelte-11msbfu"}"></form></main>
${slots.default ? slots.default({}) : ``}`;
  });
  var index$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": Contact
  });
  var css = {
    code: "main.svelte-1vkcerj{display:flex;height:100vh;width:100%}iframe.svelte-1vkcerj{border:none}",
    map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<main>\\n    <iframe title=\\"resume\\" width=\\"100%\\" src=\\"/resume.pdf\\" />\\n</main>\\n\\n<style>\\n    main {\\n        display: flex;\\n        height: 100vh;\\n        width: 100%;\\n    }\\n    iframe {\\n        border: none;\\n    }\\n</style>"],"names":[],"mappings":"AAKI,IAAI,eAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,AACf,CAAC,AACD,MAAM,eAAC,CAAC,AACJ,MAAM,CAAE,IAAI,AAChB,CAAC"}'
  };
  var Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css);
    return `<main class="${"svelte-1vkcerj"}"><iframe title="${"resume"}" width="${"100%"}" src="${"/resume.pdf"}" class="${"svelte-1vkcerj"}"></iframe>
</main>`;
  });
  var index = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": Resume
  });
  var metadata$5 = {
    "title": "A terminal-based blackjack/21 game.",
    "projectName": "21",
    "description": [
      "Created as part of LaunchSchool's JavaScript 101 assessment. The aim was the create a terminal-based game that  follows the rules of 21, or 'Black Jack'. Input is accepted via readline-sync, and all logic is handled in small,  atomic functions.",
      "As an extra challenge, I decided to make the cards 'graphical', as the initial assessment criteria was just to  display them as a letter/number and the suit, e.g. K\u2665."
    ],
    "slug": "21",
    "technologiesUsed": ["JavaScript", "readline-sync"],
    "github": "https://github.com/DaniBedz/JS101/blob/master/lesson_6/twentyone.js",
    "liveSite": "https://replit.com/@DaniBedz/twentyone#index.js"
  };
  var _21 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return ``;
  });
  var _21$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": _21,
    metadata: metadata$5
  });
  var metadata$4 = {
    "title": "A Simple Link Shortener Service",
    "projectName": "bedz.me",
    "description": [
      "I decided to make a link shortener service as I have always wondered how they worked and owned a short domain from a previous project.  This was a great learning experience as I got the chance to manage my own virtual webserver, work directly with a MySQL database, as well  as make something that I use almost everyday.",
      "This project makes use of the excellent YOURLS PHP framework which does most of the heavy lifting. The main work on this project involved  the configuration of the nginx web server, which needed some tweaking to get the required path redirects to work correctly. I also  installed some plugins to customise the functionality, as well as created the minimal-style frontend."
    ],
    "slug": "bedzme",
    "technologiesUsed": ["YOURLS", "nginx", "Ubuntu 20.04", "PHP", "MySQL", "AWS", "EC2", "CloudFront"],
    "github": "https://github.com/DaniBedz/bedz.me",
    "liveSite": "https://bedz.me"
  };
  var Bedzme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return ``;
  });
  var bedzme = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": Bedzme,
    metadata: metadata$4
  });
  var metadata$3 = {
    "title": "A professional sales tool for tracking client information, quotes and sales.",
    "projectName": "myob Sales Tracker",
    "description": [
      "I built this project to allow my wife to track her quotes and sales easier. She was using OneNote to do this previously and would found that  it was hard to track quotes, utilisations, sales, as well as all the different associated details, as the company does not have a specific tool for  sales agents themselves.",
      "Working as part of a call-center, you often do not get much time between calls for admin, so it was important that an entry could be made with  minimal information, and could be filled out later with more specifics, so I added a single Add new sale field in the top corner for the company name.",
      "There are several sale types, which are calculated using business logic based on the data entered.",
      "Items can by re-ordered by clicking and dragging, and values can be incremented using the toggles. The text notes field resizes based on the user focus.  There is also an 'Archive' section where items can be stored if they are no longer needed, but might be useful to keep and refer back to in future.",
      "Although I implemented Google Authentication via Firebase, I chose not to store any client information on my server, and records are instead saved in  localStorage as this is not an official myob solution."
    ],
    "slug": "salestracker",
    "technologiesUsed": [
      "Vite",
      "React",
      "Firebase",
      "Bootstrap",
      "Raviger",
      "Flatpickr",
      "Alertify.js",
      "Vultr (VPS)",
      "Caddy"
    ],
    "github": "https://github.com/DaniBedz/myob-sales-tracker",
    "liveSite": "https://myob.danibednarski.com"
  };
  var Salestracker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return ``;
  });
  var salestracker = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": Salestracker,
    metadata: metadata$3
  });
  var metadata$2 = {
    "title": "A Simple Todo App",
    "projectName": "taskr.me",
    "description": [
      "As part of Generation Australia's web developer program, we used pair programming and agile methodology and create  a to-do app. Our app utilises Firebase for authorisation, as well as storing task data in a database.",
      "This was the first time I had worked collaboratively with a partner. It was a great experience as I got to try out  VS Code Live Share as part of the development process. This allowed us to work on some problems at the same time in  a more efficient way than just screen sharing.",
      "I wasn't happy with the browser's standard date picker, so I integrated Flatpickr to offer a better user experience.  I also added notifications using AlertifyJS."
    ],
    "slug": "taskr",
    "technologiesUsed": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Firebase",
      "jQuery",
      "Flatpickr",
      "Bootstrap-select",
      "AlertifyJS",
      "Font Awesome"
    ],
    "github": "https://github.com/DaniBedz/todo",
    "liveSite": "https://taskr.me"
  };
  var Taskr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return ``;
  });
  var taskr = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": Taskr,
    metadata: metadata$2
  });
  var metadata$1 = {
    "title": "This site",
    "projectName": "danibednarski.com",
    "description": [
      "After hearing about Svelte on the Syntax podcast, I decided to give it a try. I am in love \u{1F60D}. After completing  the documentation tutorial, purchasing and finishing a few courses, I created this site to cement my learning.",
      "The site uses Sveltekit for SSR, and the project pages are dynamically created from markup files via MDsveX.",
      "I took my inspiration from the Discord layout, with the project icons serving as apps in the app bar on the left.  The green indicator dots on the GitHub and LinkedIn icons denote that it is an external link.",
      "I haven't used a form framework before either, so I decided to implement a contact form using 'Felte', which I  chose due to the minimal, clean syntax."
    ],
    "slug": "thissite",
    "technologiesUsed": ["Svelte", "Sveltekit", "MDsveX", "Felte"],
    "github": "https://github.com/DaniBedz/danibednarski.com",
    "liveSite": "https://danibednarski.com"
  };
  var Thissite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return ``;
  });
  var thissite = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": Thissite,
    metadata: metadata$1
  });
  var metadata = {
    "title": "Tic-tac-toe",
    "projectName": "Tic-tac-toe",
    "description": [
      "Created as part of LaunchSchool's JavaScript 101 assessment. A tic-tac-toe game with logic for an  intelligent opponent.",
      "As an extra challenge, I added in some logic to make it difficult, but not impossible to win. For example, the  computer player will try to target the middle square if it is untaken as it offers a clear advantage."
    ],
    "slug": "tictactoe",
    "technologiesUsed": ["JavaScript", "readline-sync"],
    "github": "https://github.com/DaniBedz/JS101/blob/master/lesson_6/tictactoe.js",
    "liveSite": "https://replit.com/@DaniBedz/tictactoe#index.js"
  };
  var Tictactoe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    return ``;
  });
  var tictactoe = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": Tictactoe,
    metadata
  });

  // .svelte-kit/cloudflare-workers/entry.js
  var import_kv_asset_handler = __toModule(require_dist());
  init2();
  addEventListener("fetch", (event) => {
    event.respondWith(handle(event));
  });
  async function handle(event) {
    if (event.request.method == "GET") {
      try {
        return await (0, import_kv_asset_handler.getAssetFromKV)(event);
      } catch (e) {
        if (!(e instanceof import_kv_asset_handler.NotFoundError)) {
          return new Response("Error loading static asset:" + (e.message || e.toString()), {
            status: 500
          });
        }
      }
    }
    const request = event.request;
    const request_url = new URL(request.url);
    try {
      const rendered = await render({
        host: request_url.host,
        path: request_url.pathname,
        query: request_url.searchParams,
        rawBody: await read(request),
        headers: Object.fromEntries(request.headers),
        method: request.method
      });
      if (rendered) {
        return new Response(rendered.body, {
          status: rendered.status,
          headers: makeHeaders(rendered.headers)
        });
      }
    } catch (e) {
      return new Response("Error rendering route:" + (e.message || e.toString()), { status: 500 });
    }
    return new Response({
      status: 404,
      statusText: "Not Found"
    });
  }
  async function read(request) {
    return new Uint8Array(await request.arrayBuffer());
  }
  function makeHeaders(headers) {
    const result = new Headers();
    for (const header in headers) {
      const value = headers[header];
      if (typeof value === "string") {
        result.set(header, value);
        continue;
      }
      for (const sub of value) {
        result.append(header, sub);
      }
    }
    return result;
  }
})();
/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
