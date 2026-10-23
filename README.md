# Richard Xu — academic website

A responsive, research-first personal website for Kunyao (Richard) Xu, Economics Ph.D. Candidate at George Washington University. Built with semantic HTML, CSS, and a small vanilla JavaScript enhancement. No dependencies, build process, analytics, external fonts, or paid hosting are required.

Intended public address: **https://richardxuecon.github.io/**

## Files

```text
index.html                     All academic content and metadata
styles.css                     Responsive design and print layout
script.js                      Mobile menu and active navigation
.nojekyll                      Publish static files directly
assets/images/headshot.png     User-supplied portrait, original image
assets/images/favicon.svg      RX monogram
assets/cv/Richard_Xu_CV.pdf     Public copy of the supplied academic CV
assets/papers/                 Future papers, slides, and statements
cv-paper-blurbs.md             Three 60–90 word CV paper summaries
CONTENT_NOTES.md               Source decisions and outstanding materials
```

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open **http://127.0.0.1:8000/**. Stop the server with Ctrl+C. You can also open `index.html` directly; every essential feature works without a server or JavaScript.

## Publish on GitHub Pages

1. Sign in to **richardxuecon** on GitHub.
2. Create a **public** repository named exactly **richardxuecon.github.io**. Leave it empty if pushing the prepared local Git repository.
3. Upload the contents of this directory to the root of the repository’s **main** branch. `index.html` must be at the repository root, not inside another folder. With Git, run these commands from this directory after creating the empty repository:

   ```sh
   git remote add origin https://github.com/richardxuecon/richardxuecon.github.io.git
   git push -u origin main
   ```

   These commands require authentication to your GitHub account. Never put a password or access token in a command, source file, or chat.

4. Open the repository’s **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/ (root)**. Save.
6. Wait for the Pages build in **Actions**, then open **https://richardxuecon.github.io/**.

For browser upload, choose **Add file → Upload files**, drag in the site files and `assets` folder, then commit to `main`. Include `.nojekyll` when using a Git client; the plain site also works if a browser uploader omits that empty file. Do not upload `.git`, `.qa`, or the surrounding workspace.

For a project site, use a repository name of your choice; the site then lives at `https://richardxuecon.github.io/REPOSITORY/`. All CSS, JavaScript, image, and PDF references use relative paths, so both forms work. Update the canonical URL, `og:url`, `og:image`, and JSON-LD `url`/`image` in `index.html` to the final public address.

## Replace the headshot

Replace `assets/images/headshot.png` with your preferred portrait. If changing the filename, update the `<img>` path and Open Graph/structured metadata in `index.html`. Update the intrinsic `width` and `height` attributes to match. The visual crop is controlled by `object-fit` and `object-position` in `styles.css`; the original image has not been altered.

## Update the CV

Replace `assets/cv/Richard_Xu_CV.pdf` with your updated public academic CV. Keep the filename to preserve both links. Check that the CV uses the correct expected completion date and contains only contact information you wish to publish. The included public copy is derived from the actual supplied CV, with personal contact/address/citizenship lines removed and expected Ph.D. completion set to May 2027, per the latest request. In the CV's references, Ben Williams (Associate Professor, Department of Economics, George Washington University; bdwilliams@gwu.edu) replaces Tara M. Sinclair. Your original source file is unchanged.

## Add papers, slides, or statements

Put the actual PDF in `assets/papers/`, using a stable filename such as `expectation-sentiment.pdf`. Add a descriptive link within the relevant `<article>` in `index.html`:

```html
<a class="text-link" href="assets/papers/expectation-sentiment.pdf">Read job market paper (PDF)</a>
```

Use the same approach for slides, replication materials, a teaching statement, or a research statement. Add a link only after its file exists. There are currently no paper PDF links because those files were not supplied. Full abstracts are available through native, keyboard-accessible disclosure controls.

## Edit academic content

Edit the readable HTML in `index.html`. Research, publications, teaching, experience, education, CV, and contact have named section IDs. The webpage omits Nationwide and academic references at the owner's request; the downloadable CV retains its employment history and reference section. Keep headings in order and distinguish working papers, proposals, conference acceptances, and journal publications. Use `cv-paper-blurbs.md` for concise summaries beneath paper titles in a future CV. Design colors, type, and spacing are in `styles.css`.

After edits, check desktop and mobile layouts, open each document link, and verify titles, dates, and statuses against your academic CV. Update the footer year and job-market season when appropriate. See `CONTENT_NOTES.md` for source discrepancies and verification details.

## Connect a custom domain later

After registering your chosen domain, follow GitHub’s official custom-domain instructions. In **Settings → Pages → Custom domain**, enter the domain. Configure the DNS records at your registrar as GitHub specifies, verify the domain, and enable **Enforce HTTPS** once available. Keep the generated `CNAME` file, and update canonical, Open Graph, and JSON-LD URLs in `index.html`. No domain has been selected or purchased.

Official references: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [Custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
