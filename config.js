/**
 * ╔═══════════════════════════════════════════════════════════╗
 * ║   KONFIGURASI GITHUB — Portal Akademik SMAN 5 Pinrang     ║
 * ║                      config.js                            ║
 * ╠═══════════════════════════════════════════════════════════╣
 * ║  ⚠️  FILE INI TIDAK BOLEH DI-COMMIT KE GITHUB!            ║
 * ║  ⚠️  Sudah terdaftar di .gitignore                        ║
 * ║                                                           ║
 * ║  CARA DAPATKAN gasUrl:                                    ║
 * ║  1. Buka Apps Script editor Google Sheet                  ║
 * ║  2. Deploy → New deployment → Web App                     ║
 * ║  3. Execute as: Me | Who has access: Anyone               ║
 * ║  4. Copy URL yang diberikan → paste ke gasUrl di bawah    ║
 * ╚═══════════════════════════════════════════════════════════╝
 */

window.GITHUB_CONFIG = {
  owner:  "hostinger05",
  repo:   "ortu",
  branch: "main",
  token:  "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",        // ← isi token GitHub (opsional, untuk sync file JS)

  // URL Apps Script Web App — wajib diisi untuk fitur ganti password
  gasUrl: "https://script.google.com/macros/s/AKfycby3_7Wg5LJGAbZLizbdSFe4oMKspA0U954WR9ue3eTXsBtOYuLwun_S2W7Y_8XdAjKinA/exec",        // ← contoh: "https://script.google.com/macros/s/AKfyc.../exec"
};
