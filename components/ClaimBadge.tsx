import Link from 'next/link';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { getClaim, getClaimEvidence, type ClaimId } from '@/lib/ssot';

interface ClaimBadgeProps {
  claimId: ClaimId;
  variant?: 'compact' | 'full';
  showEvidence?: boolean;
  className?: string;
}

/**
 * Renders a narrative claim (C1..C9) from SSOT v4.0 with a "Verify" link
 * pointing to the claim's primary_page. Optional evidence chip row surfaces
 * asset slugs from narrative_claimmap.evidence_slugs.
 *
 * Closes the Human↔AI dual-audience rule: every human-readable claim string
 * gets a machine-verifiable evidence anchor.
 */
export default function ClaimBadge({
  claimId,
  variant = 'compact',
  showEvidence = false,
  className = '',
}: ClaimBadgeProps) {
  const claim = getClaim(claimId);
  if (!claim) return null;

  const headline = claim.nlp_variants.short?.[0] ?? claim.core_claim;
  const evidence = showEvidence ? getClaimEvidence(claimId) : [];

  if (variant === 'compact') {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full border border-jvto-lime/30 bg-jvto-lime/5 px-3 py-1 text-xs font-medium text-jvto-navy ${className}`}
        data-claim-id={claimId}
      >
        <ShieldCheck size={12} className="text-jvto-lime" />
        <span>{claim.pillar}</span>
        <Link
          href={claim.primary_page}
          className="flex items-center gap-1 text-jvto-lime hover:underline"
        >
          Verify
          <ExternalLink size={10} />
        </Link>
      </span>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-jvto-border bg-white p-6 ${className}`}
      data-claim-id={claimId}
    >
      <div className="flex items-start gap-3 mb-3">
        <ShieldCheck size={20} className="text-jvto-lime shrink-0 mt-0.5" />
        <div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-jvto-muted font-mono mb-1">
            Claim {claimId} · {claim.pillar}
          </div>
          <p className="text-jvto-navy font-medium leading-relaxed">{headline}</p>
        </div>
      </div>

      {showEvidence && evidence.length > 0 && (
        <div className="mt-4 pt-4 border-t border-jvto-border">
          <div className="text-[10px] uppercase tracking-[0.15em] text-jvto-muted font-mono mb-2">
            Evidence ({evidence.length})
          </div>
          <div className="flex flex-wrap gap-2">
            {evidence.slice(0, 6).map(asset => (
              <span
                key={asset.slug}
                className="inline-flex items-center gap-1 rounded-md bg-jvto-off px-2 py-1 text-[10px] font-mono text-jvto-muted"
                title={asset.caption ?? asset.filename}
              >
                {asset.slug}
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        href={claim.primary_page}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-jvto-lime hover:underline"
      >
        Verify this claim
        <ExternalLink size={12} />
      </Link>
    </div>
  );
}
