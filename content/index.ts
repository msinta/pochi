export type Lang = 'jp' | 'en'

export interface Copy {
  jp: string
  en: string
}

export interface PricingTier {
  id: string
  name: Copy
  price: string
  period: Copy
  description: Copy
  features: Copy[]
  highlighted: boolean
  badge?: Copy
}

export interface ProductContent {
  meta: { title: Copy; description: Copy }
  nav: { links: { label: Copy; href: string }[]; cta: Copy }
  hero: {
    badge: Copy
    headline: Copy
    subheadline: Copy
    cta: Copy
    demoCta: Copy
  }
  socialProof: { text: Copy }
  painPoints: {
    sectionTitle: Copy
    items: { headline: Copy; description: Copy }[]
  }
  howItWorks: {
    sectionTitle: Copy
    sectionSubtitle: Copy
    steps: { number: string; headline: Copy; description: Copy }[]
  }
  features: {
    sectionTitle: Copy
    items: { headline: Copy; description: Copy; tag?: Copy }[]
  }
  pricing: {
    sectionTitle: Copy
    sectionSubtitle: Copy
    tiers: PricingTier[]
  }
  finalCta: { headline: Copy; subtext: Copy; cta: Copy }
  reveal: {
    headline: Copy
    subtext: Copy
    tierQuestion: Copy
    form: {
      name: Copy; storeUrl: Copy; email: Copy
      painPoint: Copy; painPointPlaceholder: Copy
      submit: Copy; disclaimer: Copy
    }
  }
}

const content: ProductContent = {
  meta: {
    title: {
      jp: 'Pochi — LINEの中で商品を見て、そのまま購入 for Shopify',
      en: 'Pochi — Browse and buy your Shopify catalog inside LINE',
    },
    description: {
      jp: '日本のShopifyストア専用。お客様はLINEのチャット内で商品を閲覧し、そのまま決済まで完了。アプリも別サイトも不要。',
      en: 'Built for Japanese Shopify stores. Customers browse your full catalog and check out — all inside LINE. No app downloads, no extra sites.',
    },
  },

  nav: {
    links: [
      { label: { jp: '機能', en: 'Features' }, href: '/#features' },
      { label: { jp: '料金', en: 'Pricing' }, href: '/#pricing' },
    ],
    cta: { jp: 'ベータに参加する', en: 'Join the beta' },
  },

  hero: {
    badge: {
      jp: 'Shopify × LINE Commerce',
      en: 'Shopify × LINE Commerce',
    },
    headline: {
      jp: 'LINEのチャット内で\n商品を見て、\nそのまま購入',
      en: 'Your store, right\ninside your\ncustomers\' LINE',
    },
    subheadline: {
      jp: '日本のお客様は1日2時間LINEを開きます。Pochiならカタログ閲覧から決済までLINEの中で完結。Shopifyから自動同期、アプリのダウンロードも別サイトの訪問も不要です。',
      en: 'Japanese customers spend 2+ hours/day inside LINE. Pochi lets them browse your full Shopify catalog and check out without ever leaving the app — no downloads, no redirects.',
    },
    cta: { jp: 'ベータに参加する', en: 'Join the beta' },
    demoCta: { jp: 'デモを見る', en: 'See a demo' },
  },

  socialProof: {
    text: {
      jp: '{count} 店舗のShopifyマーチャントが事前登録中',
      en: '{count} Japanese Shopify stores on the waitlist',
    },
  },

  painPoints: {
    sectionTitle: { jp: 'こんな課題、ありませんか？', en: 'Sound familiar?' },
    items: [
      {
        headline: { jp: 'LINEで商品を聞かれても、結局Webサイトに誘導', en: 'Customers ask in LINE, but you redirect them to the web' },
        description: {
          jp: 'お客様はLINEで「これいくら？」「在庫ある？」と聞いてきます。Webサイトのリンクを返すと、半分以上は戻ってきません。',
          en: 'Customers ask "how much?" or "in stock?" right in LINE. The moment you reply with a web link, more than half never come back.',
        },
      },
      {
        headline: { jp: '日本のお客様はアプリを増やしたくない', en: 'Japanese shoppers won\'t install another app' },
        description: {
          jp: '専用アプリの導入率は低く、別サイトへの遷移率も日本では特に低い。LINEの中で完結しないと購入されません。',
          en: 'App install rates are low in Japan, and so are redirect conversion rates. If checkout isn\'t inside LINE, you lose the sale.',
        },
      },
      {
        headline: { jp: '既存のLINEアプリはメッセージだけ', en: 'Existing LINE apps stop at messaging' },
        description: {
          jp: 'ShopifyのJapan App Storeを見ても、LINEで実際に「閲覧→購入」が完結するアプリはゼロ。すべてメッセージ送信用です。',
          en: 'Every LINE app on Shopify\'s Japan store does messaging only. Zero of them let customers actually browse and buy inside LINE.',
        },
      },
    ],
  },

  howItWorks: {
    sectionTitle: { jp: '3分でLINE店舗が立ち上がる', en: 'Your LINE storefront, live in 3 minutes' },
    sectionSubtitle: {
      jp: 'コード不要。Shopifyに追加して、LINE公式アカウントを繋ぐだけ。',
      en: 'No code. Install on Shopify, connect your LINE Official Account, done.',
    },
    steps: [
      {
        number: '01',
        headline: { jp: 'Shopifyアプリをインストール', en: 'Install from Shopify' },
        description: {
          jp: 'アプリストアから1クリックで導入。カタログが自動でPochiに同期されます。',
          en: 'One click from the Shopify App Store. Your catalog auto-syncs to Pochi.',
        },
      },
      {
        number: '02',
        headline: { jp: 'LINE公式アカウントを接続', en: 'Connect your LINE Official Account' },
        description: {
          jp: 'LIFFアプリが自動で発行され、リッチメニューにストアが追加されます。',
          en: 'A LIFF mini-app is provisioned and added to your LINE rich menu automatically.',
        },
      },
      {
        number: '03',
        headline: { jp: 'お客様はLINE内で閲覧・決済', en: 'Customers browse and pay inside LINE' },
        description: {
          jp: 'タップで商品ページ、カートに追加、Shopify決済まですべてLINE内で完結します。',
          en: 'Tap to view a product, add to cart, and check out with Shopify — all without leaving LINE.',
        },
      },
    ],
  },

  features: {
    sectionTitle: { jp: '主な機能', en: 'What you get' },
    items: [
      {
        headline: { jp: 'カタログをLINEに自動同期', en: 'Catalog auto-syncs from Shopify to LINE' },
        description: {
          jp: 'Shopifyの商品・価格・在庫はそのままPochiに反映されます。Webと同じカタログを、お客様が普段使っているLINEの中で見せられます。',
          en: 'Your Shopify products, prices, and inventory flow straight into Pochi. The same catalog you sell on the web, presented inside the app your customers already use.',
        },
        tag: { jp: 'カタログ同期', en: 'Catalog sync' },
      },
      {
        headline: { jp: 'LIFFで決済までLINE内完結', en: 'Checkout never leaves LINE (LIFF-powered)' },
        description: {
          jp: 'Shopifyの決済をLIFF内に埋め込み。お客様は別サイトに遷移することなく、購入を完了できます。離脱率を大きく下げます。',
          en: 'Shopify checkout runs embedded inside LIFF. Customers complete the purchase without a redirect — and the drop-off that comes with it.',
        },
        tag: { jp: '埋め込み決済', en: 'Embedded checkout' },
      },
      {
        headline: { jp: 'リッチメニューとブロードキャストで再訪問を促進', en: 'Rich menus and broadcasts drive repeat purchases' },
        description: {
          jp: 'LINEのリッチメニューに「ストアを見る」「カートに戻る」を設置。新商品が出たらブロードキャストで全顧客にプッシュ。再訪問率が上がります。',
          en: 'Pin "Browse store" and "Resume cart" to your LINE rich menu. Broadcast new arrivals to every follower instantly. Repeat-visit rates climb.',
        },
        tag: { jp: '再訪問', en: 'Re-engagement' },
      },
    ],
  },

  pricing: {
    sectionTitle: { jp: '料金プラン', en: 'Pricing' },
    sectionSubtitle: {
      jp: 'ベータ期間中は無料。創業者価格はリリース時にロック。',
      en: 'Free during beta. Lock in founder pricing before launch.',
    },
    tiers: [
      {
        id: 'beta',
        name: { jp: 'ベータ', en: 'Beta' },
        price: '$0',
        period: { jp: '/月', en: '/mo' },
        description: { jp: '創業者枠で全機能を試す', en: 'Founder access — all features' },
        features: [
          { jp: 'カタログ自動同期', en: 'Catalog auto-sync' },
          { jp: 'LIFF埋め込み決済', en: 'LIFF embedded checkout' },
          { jp: 'リッチメニュー設置', en: 'Rich menu setup' },
          { jp: 'ベータ期間中は無制限', en: 'Unlimited during beta' },
        ],
        highlighted: false,
      },
      {
        id: 'starter',
        name: { jp: 'スターター', en: 'Starter' },
        price: '$39',
        period: { jp: '/月', en: '/mo' },
        description: { jp: 'LINE経由の売上を本格化', en: 'Run LINE Commerce in production' },
        features: [
          { jp: 'ベータの全機能', en: 'Everything in Beta' },
          { jp: '月500件のLINE取引', en: '500 LINE transactions/month' },
          { jp: 'ブロードキャスト配信', en: 'Broadcast campaigns' },
          { jp: 'カート復元リンク', en: 'Cart recovery links' },
          { jp: 'メールサポート', en: 'Email support' },
        ],
        highlighted: true,
        badge: { jp: '人気', en: 'Popular' },
      },
      {
        id: 'growth',
        name: { jp: 'グロース', en: 'Growth' },
        price: '$99',
        period: { jp: '/月', en: '/mo' },
        description: { jp: '無制限取引 + 高度な分析', en: 'Unlimited transactions + analytics' },
        features: [
          { jp: 'スターターの全機能', en: 'Everything in Starter' },
          { jp: 'LINE取引無制限', en: 'Unlimited LINE transactions' },
          { jp: 'セグメント別ブロードキャスト', en: 'Segmented broadcasts' },
          { jp: '購買データ分析ダッシュボード', en: 'Purchase analytics dashboard' },
          { jp: '優先サポート', en: 'Priority support' },
        ],
        highlighted: false,
      },
    ],
  },

  finalCta: {
    headline: { jp: 'LINEの中で\nお客様に売り始める', en: 'Start selling\ninside LINE' },
    subtext: {
      jp: 'ベータに登録して創業者価格を確保。リリース後は値上がりします。',
      en: 'Join the beta to lock in founder pricing. Price increases at launch.',
    },
    cta: { jp: 'ベータに参加する', en: 'Join the beta' },
  },

  reveal: {
    headline: { jp: 'もうすぐリリース', en: "You're early" },
    subtext: {
      jp: 'ベータに登録して、創業者価格と優先アクセスを確保してください。',
      en: 'Join the waitlist to lock in founder pricing and get early access.',
    },
    tierQuestion: { jp: 'どのプランを使いますか？', en: 'Which plan would you use?' },
    form: {
      name: { jp: 'お名前', en: 'Name' },
      storeUrl: { jp: 'ShopifyストアURL', en: 'Shopify store URL' },
      email: { jp: 'メールアドレス', en: 'Email' },
      painPoint: { jp: '今LINE販売で一番困っていること', en: 'Your biggest LINE-selling pain right now' },
      painPointPlaceholder: {
        jp: '例：LINEで問い合わせは来るのに購入につながらない、Webサイトに遷移すると離脱される、など',
        en: 'e.g. LINE leads don\'t convert, customers drop off at the redirect, no app does this in Japan...',
      },
      submit: { jp: '早期アクセスに参加する', en: 'Join the waitlist' },
      disclaimer: { jp: 'スパムはありません。リリース時にご連絡します。', en: 'No spam. Launch notification only.' },
    },
  },
}

export default content
