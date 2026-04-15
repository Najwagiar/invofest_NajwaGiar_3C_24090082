
const Footer = () => {
  return (
    <footer style={{ background: "#d8b9c3", padding: "40px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        {/* Menu */}
        <div>
          <h4>MENU NAVIGASI</h4>
          <p>Beranda</p>
          <p>Tentang</p>
          <p>Narasumber</p>
          <p>FAQ</p>
        </div>

        {/* Sosial */}
        <div>
          <h4>IKUTI KAMI</h4>
          <p>Instagram</p>
          <p>Youtube</p>
        </div>

        {/* Map */}
        <div>
          <h4>ALAMAT</h4>
          <iframe
            src="https://www.google.com/maps?q=Politeknik%20Harapan%20Bersama%20Tegal&output=embed"
            width="250"
            height="150"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <p style={{ marginTop: "20px" }}>
        © Najwa Giar Eka Azzahra.
      </p>
    </footer>
  );
};

export default Footer;