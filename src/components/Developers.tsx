export default function Developers() {
  return (
    <section id="about" className="section mt-16">
      <h2 className="text-center text-xl font-semibold sm:text-2xl">
        Built by developers for everyone.
      </h2>
      <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-gray-600">
        We're a team of engineers and designers who love clean UX. BizData
        focuses on turning existing analytics data into actionable insights.
        Our mission: make behavior analytics useful for every business.
      </p>
      <div className="mx-auto mt-6 max-w-3xl rounded-xl bg-gray-50 p-4 ring-1 ring-gray-100">
        <code className="block whitespace-pre-wrap text-xs text-gray-800">
{`<!-- Install BizData -->
<script>
  (function(){ 
    window.bizData = window.bizData || function(){(bizData.q = bizData.q || []).push(arguments)};
    bizData('init', { siteId: 'YOUR_SITE_ID' });
  })();
</script>`}
        </code>
      </div>
    </section>
  );
}