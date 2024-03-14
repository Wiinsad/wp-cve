import React from 'react';
import { PostDate, TaxonomyBar, Author, decodeHTML, handleNavigation } from '../utilities';
import truncateWords from "truncate-words";
import Lazyload from 'react-lazyload';
import { usePostItemStyles } from '../../hooks/use-doc-globals';

import './index.scss';

export function PostGrid( props ) {
	const {
		aspectRatio,
		colsMobile,
		colsTablet,
		dateFormat,
		dateFormatCustom,
		deviceType,
		excerptLength,
		highlightFirstPost,
		isLazy,
		posts,
		postItemSpacing,
		showAuthor,
		showDate,
		showDivider,
		showExcerpt,
		showFeaturedImage,
		showPrice,
		showTaxonomies,
		taxonomyAliases,
		docGlobals,
	} = props;

	if ( ! posts.length ) {
		return null;
	}

	const {
		titleStyles,
		metaStyles,
		bodyStyles,
		wooPriceStyles,
	} = usePostItemStyles( docGlobals );

	const postItemStyles = {
		paddingTop: `${ postItemSpacing }rem`,
		paddingBottom: `${ postItemSpacing }rem`,
	}

	return (
		<div className={ `post-grid post-grid--divider-${ showDivider } colsMobile--${ colsMobile } colsMobile--${ colsMobile }--${ deviceType } colsTablet--${ colsTablet } colsTablet--${ colsTablet }--${ deviceType }` }>
			{
				posts.map( ( post, index ) => {

					const taxTerms = post.taxonomiesWithTerms || {};

					const excerptElement = document.createElement( 'div' );

					const newExcerptLength = highlightFirstPost && 0 === index ? excerptLength + 10 : excerptLength;
					let newExcerpt = truncateWords( post.excerpt, newExcerptLength, ' ...' );

					excerptElement.innerHTML = newExcerpt;
					newExcerpt = excerptElement.textContent || excerptElement.innerText || '';

					const imageElements = (
						showFeaturedImage && post.imageInfo && (
							<div className={ `post-grid__item-thumbnail-wrapper post-grid__item-thumbnail-wrapper--${ aspectRatio }` }>
								<img className="post-grid__item-thumbnail" src={ post.imageInfo.url } />
							</div>
						)
					);

					return (
						<div className={ `post-grid__item post-grid__item--highlight-${ highlightFirstPost && 0 === index }` } key={ index } onClick={ ( e ) => handleNavigation( e, post.id, post.postType, { title: post.title, url: post.url } ) } style={ postItemStyles }>
							<ons-ripple color='rgba(0, 0, 0, 0.05)'></ons-ripple>

							{ isLazy ? ( <Lazyload height={ 300 }>
								{ imageElements }
							</Lazyload> ) : imageElements }

							<div className="post-grid__item-text-wrapper">
								<div className="post-item__title post-grid__item-title" style={ titleStyles }>{ decodeHTML( post.title ) }</div>

								<div style={ metaStyles }>
									<div className="post-item__meta post-item__date-author" style={ metaStyles }>
										{ showAuthor && post.author && (
											<Author authorName={ post.author.name || post.author.username } />
										) }

										{ showDate && (
											<PostDate date={ post.date } dateFormat={ dateFormat } dateFormatCustom={ dateFormatCustom } />
										) }
									</div>

									{ showExcerpt && ( <div className="post-item__body post-grid__item-excerpt" style={ bodyStyles }>{ newExcerpt }</div> ) }

									{ post.productInfo && showPrice && <div className="post-item__product-price product-price" style={ wooPriceStyles } dangerouslySetInnerHTML={ { __html: post.productInfo.priceHtml } } /> }

									{
										Object.keys( showTaxonomies ).length > 0 && (
											<div className="post-item__meta post-item__taxonomies" style={ metaStyles }>
												{
													Object.keys( taxTerms ).map( ( taxSlug, index ) => {
														return ( showTaxonomies[ taxSlug ] ? (
															<TaxonomyBar key={ index }
																taxonomy={ taxTerms[ taxSlug ].label }
																terms={ taxTerms[ taxSlug ].terms || [] }
																taxonomyAliases={ taxonomyAliases }
															/> ) : null );
													} )
												}
											</div>
										)
									}
								</div>
							</div>
						</div>
					);
				} )
			}
		</div>
	)
}

PostGrid.defaultProps = {
	showTaxonomies: {},
	dateFormat: 'do MMMM, yyyy',
	dateFormatCustom: '',
	deviceType: '',
	isLazy: false,
	posts: [],
	postItemSpacing: 0.75,
	showAuthor: true,
	showDate: true,
	showDivider: false,
	showFeaturedImage: true,
	titleFontSize: 1,
}