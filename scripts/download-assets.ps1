$ErrorActionPreference = "Stop"

$assets = @(
  # Global
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/b9aa2906-72a1-4f59-a03a-81b8175346db/MZ_Logo_2022-03.png?format=1500w"; out = "public/images/global/logo.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/e3780e2d-cdfe-4986-8c45-fb00d8f32ce2/Background_with+logo.jpg?format=2500w"; out = "public/images/global/background-with-logo.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/a3c3f05b-7edc-4cc7-9336-d3426b876818/DSC_1018_expanded_small.jpg?format=1000w"; out = "public/images/global/headshot.jpg" },

  # Home hover thumbnails
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1723733958307-4QEB0O6BGUDNHL73PT0S/Portfolio+Layout-05.png?format=2500w"; out = "public/images/home/cvisualidentity.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1723647005326-HSJ65LN5NF46LP9L0QNK/Portfolio+Layout+2-01.jpg?format=2500w"; out = "public/images/home/thannualreport.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1663800988739-DAOPMJ1NDGMN3LEAY4DA/01+copy.jpg?format=2500w"; out = "public/images/home/abmovetofeel.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1669072991053-89C99ENGQH0QM9I5QHRQ/Portfolio+Layout-03.jpg?format=2500w"; out = "public/images/home/rcontentcreation.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1657983870812-Y6O02YTQQ8V45V2ESHTE/Comp+5+copy.jpg?format=2500w"; out = "public/images/home/thutilityofthefuture.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1660665092148-XHA6CAU563D0C0RHV4SQ/Portfolio+Layout-02.jpg?format=2500w"; out = "public/images/home/mzalbumartwork.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1657931331339-UZWVQ1TJZFQ344GK3C3U/Portfolio+Layout-03.jpg?format=2500w"; out = "public/images/home/auallynewsletter.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1664393880570-8E2A45T0TKHFKQN0TKJT/Portfolio+Layout-042.png?format=2500w"; out = "public/images/home/mzfilmtitlesequence.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1657979256120-M3LYN200P0505CCTAQYQ/Portfolio+Layout-01.jpg?format=2500w"; out = "public/images/home/thsocialmedia.jpg" },

  # C_visual identity
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/c1adb47c-a0e8-4a0c-a5bd-507ba3267a5e/background.png?format=2500w"; out = "public/images/work/cvisualidentity/hero.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/b38c6c68-ffe3-4b9f-9fb5-18005663111b/Portfolio+Layout-01.png?format=2500w"; out = "public/images/work/cvisualidentity/gallery-01.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/f901728d-5e45-4e17-ac34-3e54c306f766/Portfolio+Layout-02.png?format=2500w"; out = "public/images/work/cvisualidentity/gallery-02.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/708a5b47-c4bb-45ea-bece-222843b46597/Portfolio+Layout-05.png?format=2500w"; out = "public/images/work/cvisualidentity/gallery-03.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/c356fee4-fb59-4f73-9abc-c7a33434468c/Portfolio+Layout-04.png?format=2500w"; out = "public/images/work/cvisualidentity/gallery-04.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/429310f4-5525-423e-b262-994f1be532b5/Portfolio+Layout-03.png?format=2500w"; out = "public/images/work/cvisualidentity/gallery-05.png" },

  # TH_annual report
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/0d5515ef-a98a-4a2c-8ad3-f72e2c8f5165/background.jpg?format=2500w"; out = "public/images/work/thannualreport/hero.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/7525952e-b64f-400e-8dbe-189620380324/Portfolio+Layout+2-02.jpg?format=2500w"; out = "public/images/work/thannualreport/gallery-01.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/8f37673d-7ea3-420a-afe5-2a7f41164acf/Portfolio+Layout+2-01.jpg?format=2500w"; out = "public/images/work/thannualreport/gallery-02.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/541ffe70-475d-4359-9bce-2926c6d8f5a3/Portfolio+Layout+2-03.jpg?format=2500w"; out = "public/images/work/thannualreport/gallery-03.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/02214eca-b0f1-48e0-9f3d-18852366cfc8/Portfolio+Layout+2-04.jpg?format=2500w"; out = "public/images/work/thannualreport/gallery-04.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/4a60f23f-58ec-4c31-b8d9-b89ee0712e48/Portfolio+Layout+2-05.jpg?format=2500w"; out = "public/images/work/thannualreport/gallery-05.jpg" },

  # AB_move to feel
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/6654b8c9-abb5-4056-89e0-1e8edfdbdd0a/background.jpg?format=2500w"; out = "public/images/work/abmovetofeel/hero.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/afc372c8-5df8-48e7-82cc-15c39ba39d72/Portfolio+Layout-01.png?format=2500w"; out = "public/images/work/abmovetofeel/gallery-01.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/a877657b-7480-4626-88ea-01a0a942af04/Portfolio+Layout-02.png?format=2500w"; out = "public/images/work/abmovetofeel/gallery-02.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/30050cbe-2fe2-44e5-811b-8e94fd1246dd/Portfolio+Layout-03.png?format=2500w"; out = "public/images/work/abmovetofeel/gallery-03.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/19450767-1f70-4cd7-b94f-96130ca85eac/Portfolio+Layout-04.png?format=2500w"; out = "public/images/work/abmovetofeel/gallery-04.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/c1e52074-1072-41b8-b6ce-340fb146144d/Portfolio+Layout-05.png?format=2500w"; out = "public/images/work/abmovetofeel/gallery-05.png" },

  # R_content creation
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/449acbea-5c97-4f02-b6ea-042e973a7c2b/Background.jpg?format=2500w"; out = "public/images/work/rcontentcreation/hero.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/ca3a022c-fb6b-46ad-b0f3-52a0880604a7/Portfolio+Layout-01.jpg?format=2500w"; out = "public/images/work/rcontentcreation/gallery-01.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/67d76d2f-2bbb-4df2-aafe-9c1064dffdf3/Portfolio+Layout-02.jpg?format=2500w"; out = "public/images/work/rcontentcreation/gallery-02.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/f91f536d-94b0-4d20-a5c0-6cf7d4a4cb72/Portfolio+Layout-03.jpg?format=2500w"; out = "public/images/work/rcontentcreation/gallery-03.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/3cad0728-3b9f-4b54-9a72-8667492c256f/Portfolio+Layout-04.jpg?format=2500w"; out = "public/images/work/rcontentcreation/gallery-04.jpg" },

  # TH_utility of the future
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/335d92b4-0094-4e57-ad43-6a7ff4f96048/Background.jpg?format=2500w"; out = "public/images/work/thutilityofthefuture/hero.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/70e74fc3-4c95-44d9-a5ba-db2284099ece/Portfolio+Layout-01.jpg?format=2500w"; out = "public/images/work/thutilityofthefuture/gallery-01.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/d4ae73e3-be27-485e-b341-3e85b828dc5f/Portfolio+Layout-02.jpg?format=2500w"; out = "public/images/work/thutilityofthefuture/gallery-02.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/75a53568-a79a-438d-aefd-f8e643a6eff0/Portfolio+Layout-03.jpg?format=2500w"; out = "public/images/work/thutilityofthefuture/gallery-03.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/033e468d-c040-405b-85c4-31dd9b2e6196/Portfolio+Layout-04.jpg?format=2500w"; out = "public/images/work/thutilityofthefuture/gallery-04.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/c311a5b8-a7ba-40d4-a786-6861060f4c1b/Portfolio+Layout-05.jpg?format=2500w"; out = "public/images/work/thutilityofthefuture/gallery-05.jpg" },

  # MZ_album artwork
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/72aee392-c781-42a3-88e5-585c5d018179/background.jpg?format=2500w"; out = "public/images/work/mzalbumartwork/hero.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/812611ea-083b-4400-a0a9-320df6161e1a/Portfolio+Layout-01.jpg?format=2500w"; out = "public/images/work/mzalbumartwork/gallery-01.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/f66cea76-f802-4828-b0b1-f69c2bf502f4/Portfolio+Layout-03.jpg?format=2500w"; out = "public/images/work/mzalbumartwork/gallery-02.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/1f6dfd5b-8bbf-4542-b380-1ce583bf3913/Portfolio+Layout-02.jpg?format=2500w"; out = "public/images/work/mzalbumartwork/gallery-03.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/0a675bc5-210f-42f9-bb48-5b8f3ce3079c/Portfolio+Layout-05.jpg?format=2500w"; out = "public/images/work/mzalbumartwork/gallery-04.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/49165762-e407-4667-8c71-68a7ff895248/Portfolio+Layout-04.jpg?format=2500w"; out = "public/images/work/mzalbumartwork/gallery-05.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/9a154ddb-66f6-4d6f-9b31-4481c0ddca87/Portfolio+Layout-06.jpg?format=2500w"; out = "public/images/work/mzalbumartwork/gallery-06.jpg" },

  # AU_ally newsletter
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/061cd6ad-6768-429c-9907-5fc7e8911c32/ally+background+2.jpg?format=2500w"; out = "public/images/work/auallynewsletter/hero.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/0dbd8b2c-eeca-4cff-bbc1-a03546780a19/Portfolio+Layout-01.jpg?format=2500w"; out = "public/images/work/auallynewsletter/gallery-01.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/bbe4c03b-2c03-449c-9dd2-dab14e99bcd9/Portfolio+Layout-02.jpg?format=2500w"; out = "public/images/work/auallynewsletter/gallery-02.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/d170170f-816a-4544-8cc5-dddf5f651d1b/Portfolio+Layout-03.jpg?format=2500w"; out = "public/images/work/auallynewsletter/gallery-03.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/ad583ad6-17a2-4262-acfc-1544e56916f0/Portfolio+Layout-04.jpg?format=2500w"; out = "public/images/work/auallynewsletter/gallery-04.jpg" },

  # MZ_film title sequence
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/43cf3fe7-e997-457d-880f-4b9c286e1e09/Background.jpg?format=2500w"; out = "public/images/work/mzfilmtitlesequence/hero.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/974750e0-fdd0-4862-8c6b-bf176ac877e8/Portfolio+Layout-042.png?format=2500w"; out = "public/images/work/mzfilmtitlesequence/gallery-01.png" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/579b04cf-80e0-4270-b3ed-40dff9d14144/Portfolio+Layout-01.jpg?format=2500w"; out = "public/images/work/mzfilmtitlesequence/gallery-02.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/0762fc7f-3522-432a-b973-c710c069b98b/Portfolio+Layout-05.jpg?format=2500w"; out = "public/images/work/mzfilmtitlesequence/gallery-03.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/ccd0afec-65f2-4822-a6bd-78c4fcd80c76/Portfolio+Layout-03.jpg?format=2500w"; out = "public/images/work/mzfilmtitlesequence/gallery-04.jpg" },

  # TH_social media
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/a8bda266-910c-4ad8-9d4f-aeccf82b8cbc/Background.jpg?format=2500w"; out = "public/images/work/thsocialmedia/hero.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/51359e70-38e4-47c6-aa63-972267df0b7a/Portfolio+Layout-01.jpg?format=2500w"; out = "public/images/work/thsocialmedia/gallery-01.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/7fbdbf5b-966a-4e43-9e98-8ad19f677c2d/Portfolio+Layout-02.jpg?format=2500w"; out = "public/images/work/thsocialmedia/gallery-02.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/6851068b-7625-4cb9-b58b-9f313e8e98ae/Portfolio+Layout-04.jpg?format=2500w"; out = "public/images/work/thsocialmedia/gallery-03.jpg" },
  @{ url = "https://images.squarespace-cdn.com/content/v1/62d1dec2ef826e552c4fd6e4/3879515b-743d-4063-aaaf-dd75240f3689/Portfolio+Layout-06.jpg?format=2500w"; out = "public/images/work/thsocialmedia/gallery-04.jpg" }
)

$ok = 0; $fail = 0
foreach ($a in $assets) {
  try {
    Invoke-WebRequest -Uri $a.url -OutFile $a.out -UserAgent "Mozilla/5.0"
    $ok++
  } catch {
    Write-Host "FAILED: $($a.url) -> $($_.Exception.Message)"
    $fail++
  }
}
Write-Host "Done. OK=$ok FAIL=$fail"
