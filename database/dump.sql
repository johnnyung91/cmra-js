--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
75	46	2	2595
76	31	1	2999
78	32	2	2595
79	32	1	2999
80	32	3	2900
87	32	1	2999
88	32	1	2999
89	32	1	2999
90	32	1	2999
91	32	1	2999
92	32	1	2999
93	32	1	2999
94	32	1	2999
95	32	1	2999
96	32	2	2595
97	32	1	2999
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-04-25 07:08:33.897514+00
2	2020-04-25 07:28:05.418849+00
3	2020-04-25 07:28:47.888176+00
4	2020-04-25 07:40:16.078507+00
5	2020-04-25 07:48:09.078962+00
6	2020-04-25 07:48:30.929711+00
7	2020-04-25 07:48:45.879124+00
8	2020-04-25 07:49:09.464114+00
9	2020-04-25 08:13:18.924796+00
10	2020-04-25 08:20:25.253446+00
11	2020-04-25 08:20:45.037511+00
12	2020-04-25 08:21:23.609849+00
13	2020-04-25 08:22:11.507031+00
14	2020-04-25 08:24:00.200886+00
15	2020-04-25 08:27:57.925585+00
16	2020-04-25 08:29:10.570918+00
17	2020-04-25 08:37:30.351826+00
18	2020-04-25 08:40:59.735305+00
19	2020-04-25 08:41:59.590942+00
20	2020-04-25 08:49:15.660444+00
21	2020-04-25 08:49:40.003143+00
22	2020-04-25 09:53:30.163365+00
23	2020-04-25 09:54:19.499114+00
24	2020-04-25 09:57:23.162557+00
25	2020-04-25 09:58:50.009167+00
26	2020-04-25 10:00:22.899194+00
27	2020-04-25 10:05:06.730968+00
28	2020-04-25 20:18:02.783106+00
29	2020-04-26 00:40:05.227165+00
30	2020-04-26 18:51:28.629893+00
31	2020-05-30 09:44:05.471163+00
32	2020-05-31 04:47:46.19824+00
33	2020-06-02 02:17:22.801413+00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
4	Nikon 20mm f/1.8G AF-S ED NIKKOR Lens	64995	/images/nikkor20mm.jpg	Widen your creative potential with Nikon's fastest wide-angle lens yet. Capture everything from landscapes, skyscapes and architecture to wedding parties, family portraits, stage events and more - indoors or outdoors.	With the ultra-wide view of a 20mm lens, you're free to capture expansive landscapes and architecture, wedding parties, an entire band on stage, crowd shots and much more. Add low-light capabilities to that view, and the shooting possibilities are nearly endless. Introducing the AF-S NIKKOR 20mm f/1.8G ED, a compact, lightweight FX-format lens that combines the ultra-wide perspective of a 20mm focal length, the low-light capabilities and shallow depth of field of an f/1.8 maximum aperture and the superb optical characteristics of an advanced NIKKOR prime lens. Whether you shoot stills, HD video, time lapse sequences or star trail images on an FX- or DX-format D-SLR, the AF-S NIKKOR 20mm f/1.8G ED will widen your creative potential.
5	Nikon 50mm f/1.8G AF-S NIKKOR Lens	14995	/images/nikkor50mm.jpg	This updated classic with a fast maximum aperture is ideal for everyday shooting, perfect in low lighting situations and great for producing images with beautiful background blur (Bokeh).	A must-have for standard portraits and everyday use, the AF-S NIKKOR 50mm f/1.8G is a lens that will absolutely surprise you. The 50mm focal length (75mm equivalent on DX format cameras) with a fast f/1.8 aperture allows you to capture stunning images with a shallow depth-of-field, letting your subjects stand out from their backgrounds. The AF-S NIKKOR 50mm f/1.8G may soon become your new favorite lens.
6	Nikon 85mm f/1.8G AF-S FX NIKKOR Lens	39995	/images/nikkor85mm.jpg	Updated and optimized for digital, this fast aperture compact medium telephoto FX-format portrait lens offers crisp and natural image reproduction for stills and HD video.	Designed for use on Nikon's FX-format D-SLR cameras, this updated medium telephoto f/1.8 lens is great for shooting stills or HD videos. The AF-S NIKKOR 85mm f/1.8G features Nikon's Internal Focus (IF) system providing fast and quiet AF and produces sharp and clear images at all apertures. Its fast maximum aperture is ideal for taking stills or HD videos under ideal lighting, in low light, head and shoulder portraiture, weddings or concerts. When mounted on a DX-format D-SLR, the AF-S NIKKOR 85mm f/1.8G has an effective field of view of 127mm.
7	Nikon 14-24mm f/2.8G ED-IF AF-S NIKKOR Lens	115095	/images/nikkor1424mm.jpg	Fast aperture, high-performance, ultra-wide-angle zoom optimized for FX- and DX-format sensors featuring Nikon's exclusive ED Glass and Nano Crystal Coat.	With a fast fixed maximum aperture of f/2.8, the award-winning AF-S NIKKOR 14-24mm f/2.8G ED delivers truly superlative performance in any situation. Nikon's exclusive lens technologies and innovations in optical design deliver outstanding sharpness, color and contrast, even in backlit conditions. Tough, reliable, simply exceptional - this is essential glass for serious photographers who demand the best photos and HD videos.
8	Nikon 24-70mm f/2.8G ED-IF AF-S NIKKOR Lens	125095	/images/nikkor2470mm.jpg	The evolution of a legendary workhorse; a lens capable of taking your work to the next level. Pair it with a Nikon full-frame high-resolution DSLR to capture the decisive moment with a thrilling balance of sharpness and soft blur effects.	Super steady and always ready, the AF-S NIKKOR 24-70mm f/2.8E ED VR workhorse is prepared to take your work to the next level. With up to 4 stops* of VR (Vibration Reduction) image stabilization, you can capture sharp, steady handheld stills and HD videos, and shoot at slower shutter speeds in low-light situations without sacrificing sharpness. Pair it with a Nikon full-frame high-resolution DSLR to capture the decisive moment with a thrilling balance of sharpness and soft blur effects. Covering the sweet spot of the zoom range with a fast f/2.8 constant aperture, you'll be ready for everything from environmental portraits, studio photography, landscape, architecture (exteriors and interiors), press events and weddings.
9	Nikon 70-200mm f/2.8E FL ED VR AF-S NIKKOR Lens	159995	/images/nikkor70200mm.jpg	The new benchmark for fast telephoto zoom lenses, and a powerhouse for low-light, sports, wildlife, concerts, weddings, portraits and everyday shooting.	For years, Nikon's 70-200 f/2.8 lens has been the benchmark for fast telephoto zoom lenses, unrivaled for low-light, sports, wildlife, concerts, weddings, portraits and everyday shooting. This new version takes that legendary performance to the next level with the same jaw-dropping image quality that has made it a prized lens of pros and serious hobbyists alike. Whether you're shooting a DX DSLR like the D500 or an FX powerhouse like the D5, the AF-S NIKKOR 70-200mm f/2.8E FL ED VR will take you to thrilling new heights.
3	Nikon D6 DSLR Body	559995	/images/nikond6.jpg	Featuring Nikon's most powerful AF system to date for capturing every heart-pounding, pivotal moment, Nikon's new FX flagship is an uncompromising workhorse DSLR that lives up to every professional demand in any environment.	Captivating imaging power, astonishing speed, dazzling low light performance and extreme durability - all paired with the most powerful AF in Nikon's history. Tough enough for the most demanding professional environments, both in the field and in the studio. Sports and action shots with exceptional focus where it matters. Fast and reliable 14fps continuous shooting. Stunningly clean image quality that shines in any light. Remoteless long exposures. Crucial workflow enhancements for the modern age. The Nikon D6 will redefine the way you work.
2	Nikon D850 DSLR Body	279995	/images/nikond850.jpg	The Nikon D850 is a professional-grade full-frame digital single-lens reflex camera (DSLR) produced by Nikon. 	Welcome to the next frontier of extreme-resolution photography. Powered by its Nikon-designed full frame back-side illuminated (BSI) image sensor with no optical low-pass filter, the D850 delivers 45.7 megapixels of pure resolution across a staggering dynamic range and at speeds up to 9 FPS. With remarkable advancements across the board - autofocus, dynamic range, sensitivity, Speedlight control, battery life, shutter and mirror drive mechanisms, Silent Photography in Live-View mode, focus shift capability and more this is quite possibly the most impressive, well-rounded DSLR yet.
10	MeFOTO RoadTrip Classic Leather Edition - CF	34995	/images/mefoto-rt-leather.jpg	Sleek, sturdy, and now with a classic leather finish! A mid-sized classic carbon fiber tripod capable of supporting a full-frame DSLR and telephoto lens.	The titanium RoadTrip Classic Leather Edition Tripod from MeFOTO is a 3.7 lb support with carbon fiber legs that reverse-fold to become a compact 15.4" for transport. With the legs in a normal position you can turn the twist-locks, extend the center column and each of the 5-leg sections, so the tripod can reach a maximum height of 61.8". Moreover, each leg has a double stitched Italian leather hand grip, which makes it comfortable to hold and adds a level of protection to the legs.
11	Nikon SB-700 TTL AF Speedlight Flash	29995	/images/nksb700.jpg	High performance versatile Speedlight brings simplicity to on-camera, remote, and multiple flash photography.	The i-TTL-optimized SB-700 offers the perfect balance of exposure, performance and portability for any photographer on the go. It's flexible flash head provides creative lighting freedom for nearly any subject. Achieve brilliant results and seamless lighting system integration with hot shoe operation or wirelessly as a master, commander or remote light source.
12	Nikon ML-L3 IR Remote Control Transmitter	1295	/images/nkmll3.jpg	Enables wireless remote shutter release. Trigger the shutter remotely when using slower shutter speeds to prevent camera movement.	The Nikon ML-L3 Wireless Remote Control is a wireless shutter release capable of instantly triggering the shutter of select Nikons, without disturbing the camera, up to a distance of approximately 16' (4.87 m) in front of the camera. The remote can work from behind the camera as well, however its range is not as long. It is recommended for taking pictures of subjects that are difficult to approach, or to minimize vibration for close-ups and time exposure, and it is powered by a CR-2025 3v battery. The ML-L3 supports the bulb exposure camera setting making it a worthwhile accessory for shooting long time exposures for low-light photography or unusual daylight effects.
1	Nikon D780 DSLR Body	169995	/images/nikond780.jpg	Capture incredible shots and 4K video with Nikon's FX Advanced Entry Model, the D780	For those who express themselves without labels, the D780 is capable of bringing every spectacular vision to life and inspiring completely new ways to create. Versatility through the splendor of full frame photography and 4K video, slow motion, time-lapse, remoteless long exposures and a host of impactful creative shooting tools to keep inspiration flowing. Agility through major technological enhancements like a 180K-pixel Advanced Scene Recognition System, superb phase-detect autofocusing in photo and video and easy wireless image transfer to keep up with every creative demand. The D780 is a creator's dream come true. And as the successor to the expectation-shattering D750, it's a serious upgrade in terms of speed, image processing, video capability, autofocus performance and so much more.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 100, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 33, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 1, false);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

