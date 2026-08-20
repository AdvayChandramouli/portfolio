/**
 * Ambient page ground: a lit sheet of stock resting on a cooler surface, with
 * indigo and teal reading as tints in the light rather than as shapes.
 *
 * Entirely CSS — see `.page-ground` in globals.css. No canvas, no scroll or
 * animation-frame work, and nothing to hydrate; bloom layers drift on
 * compositor-only transforms and hold still under prefers-reduced-motion.
 *
 * Four bloom layers (two per ink) approximate the overlapping wash of the old
 * Shift canvas field without main-thread paint work.
 */
export function PaperGround() {
  return (
    <div className="page-ground" aria-hidden>
      <div className="page-ground-bloom page-ground-bloom-teal" />
      <div className="page-ground-bloom page-ground-bloom-teal page-ground-bloom-teal-secondary" />
      <div className="page-ground-bloom page-ground-bloom-indigo" />
      <div className="page-ground-bloom page-ground-bloom-indigo page-ground-bloom-indigo-secondary" />
    </div>
  );
}
